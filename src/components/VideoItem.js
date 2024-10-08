import { LitElement, html, css } from 'lit';

class VideoItem extends LitElement {
  static styles = css`
    .video-item {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 10px;
      background-color: #ffffff;
      border: 1px solid #e0e0e0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: box-shadow 0.3s ease;
    }
    .video-item:hover {
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    img {
      width: 160px;
      height: auto;
      margin-right: 20px;
      border-radius: 8px;
    }
    a {
      font-size: 1.2em;
      text-decoration: none;
      color: #0073e6;
      font-weight: bold;
    }
    a:hover {
      text-decoration: underline;
    }
    p {
      margin: 5px 0;
      color: #666;
      font-size: 0.95em;
    }
    .details {
      flex-grow: 1;
    }
  `;

  static properties = {
    video: { type: Object },
  };

  render() {
    const { snippet, statistics, id } = this.video;
    return html`
      <li class="video-item">
        <a href="https://www.youtube.com/watch?v=${id.videoId}" target="_blank">
          <img src="${snippet.thumbnails.default.url}" alt="${snippet.title}" />
        </a>
        <div>
          <a href="https://www.youtube.com/watch?v=${id.videoId}" target="_blank">${snippet.title}</a>
          <p>${snippet.description}</p>
          <p>Total Comments: ${statistics.commentCount}</p>
        </div>
      </li>
    `;
  }
}

customElements.define('video-item', VideoItem);