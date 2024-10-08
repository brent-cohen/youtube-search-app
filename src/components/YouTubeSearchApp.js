import { LitElement, html, css } from 'lit';
import { searchVideos, getVideoStatistics } from '../api/youtubeApiService.js';

class YouTubeSearchApp extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      color: #333;
      background-color: #fafafa;
      padding: 20px;
    }

    .search-bar {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #0073e6;
      padding: 15px;
      margin-bottom: 30px;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .search-bar input[type="text"] {
      width: 300px;
      padding: 10px;
      margin-right: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      transition: border-color 0.3s;
    }

    .search-bar input[type="text"]:focus {
      border-color: #0056b3;
    }

    .search-bar select {
      padding: 10px;
      margin-right: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #fff;
      color: #333;
    }

    .search-bar button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #ffffff;
      color: #0073e6;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.3s, color 0.3s;
    }

    .search-bar button:hover {
      background-color: #0056b3;
      color: #ffffff;
    }

    .video-list {
      list-style-type: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 20px;
    }

    /* Two items per row for full-width screens */
    @media (min-width: 768px) {
      .video-list {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    /* One item per row for narrow screens */
    @media (max-width: 767px) {
      .video-list {
        grid-template-columns: 1fr;
      }
    }
  `;

  static properties = {
    videos: { type: Array },
    query: { type: String },
    sortOption: { type: String },
  };

  constructor() {
    super();
    this.videos = [];
    this.query = '';
    this.sortOption = 'relevance';
  }

  updateQuery(e) {
    this.query = e.target.value;
  }

  updateSortOption(e) {
    this.sortOption = e.target.value;
    if (this.query.trim()) this.searchVideos();
  }

  async searchVideos() {
    try {
      const data = await searchVideos(this.query, this.sortOption);
      const videoIds = data.items.map(item => item.id.videoId);
      const statsData = await getVideoStatistics(videoIds);

      this.videos = data.items.map(item => {
        const stats = statsData.items.find(video => video.id === item.id.videoId);
        return {
          ...item,
          statistics: stats ? stats.statistics : { commentCount: 'N/A' },
        };
      });
    } catch (error) {
      console.error('Error fetching videos', error);
    }
  }

  render() {
    return html`
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search"
          @input="${this.updateQuery}"
          .value="${this.query}" />
        <select @change="${this.updateSortOption}" .value="${this.sortOption}">
          <option value="date">Date</option>
          <option value="rating">Rating</option>
          <option value="relevance">Relevance</option>
          <option value="title">Title</option>
          <option value="viewCount">View Count</option>
        </select>
        <button @click="${this.searchVideos}">Search</button>
      </div>
      <ul class="video-list">
        ${this.videos.map(
          video => html`<video-item .video="${video}"></video-item>`
        )}
      </ul>
    `;
  }
}

customElements.define('youtube-search-app', YouTubeSearchApp);