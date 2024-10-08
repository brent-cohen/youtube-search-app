const API_KEY = YOUR_YOUTUBE_API_KEY; //update with your key
   const BASE_URL = 'https://www.googleapis.com/youtube/v3';

   export const searchVideos = async (query, sortOption) => {
     const response = await fetch(`${BASE_URL}/search?part=snippet&q=${query}&order=${sortOption}&type=video&key=${API_KEY}&maxResults=10`);
     if (!response.ok) throw new Error('Search request failed');
     return response.json();
   };

   export const getVideoStatistics = async (videoIds) => {
     const response = await fetch(`${BASE_URL}/videos?part=statistics&id=${videoIds.join(',')}&key=${API_KEY}`);
     if (!response.ok) throw new Error('Statistics request failed');
     return response.json();
   };