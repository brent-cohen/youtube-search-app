# YouTube Search App

This is a single-page web application built with Web Components using the Lit library. It allows users to search for YouTube videos using the YouTube Data API, displaying results in a responsive grid view format with detailed information for each video.

## Features

- **Search by Keyword**: Find videos on YouTube by entering a search term.
- **Sort Options**: Sort search results by date, rating, relevance, title, and view count.
- **Responsive Grid Layout**: Displays video results in a grid format that adapts to different screen sizes.
- **Video Details**: Each video item displays a thumbnail, title, description, and comment count.
- **Component-Scoped Styles**: Styles are incorporated directly in the component files, ensuring modularity and encapsulation.

## Technologies Used

- **[Lit](https://lit.dev/)**: A simple library for building fast, lightweight web components.
- **YouTube Data API**: Fetches search results and video details.
- **ES Modules**: Modern JavaScript module system.
- **CSS Grid**: Responsive and flexible layout system for arranging content.

## Project Structure

```
youtube-search-app/
??? src/
?   ??? api/
?   ?   ??? youtubeApiService.js       # API calls to YouTube
?   ??? components/
?       ??? YouTubeSearchApp.js        # Main application component with embedded CSS
?       ??? VideoItem.js               # Component to render individual video with embedded CSS
??? index.html                         # Main entry point
??? package.json                       # Node.js dependencies and scripts
??? README.md                          # Project documentation
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/brent-cohen/youtube-search-app.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd youtube-search-app
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Set up your YouTube API Key**:
   - Obtain an API key from the [Google Developer Console](https://console.developers.google.com/).
   - Replace `'YOUR_YOUTUBE_API_KEY'` in `youtubeApiService.js` with your API key.

5. **Start the development server**:
   ```bash
   npm run start
   ```

   Open your browser and navigate to `http://localhost:8000` to see the app in action.

## Usage

- Enter a search term in the input box and click "Search" to fetch video results.
- Use the dropdown to select sorting options.
- Click on a video title or thumbnail to view it on YouTube.