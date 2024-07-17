// src/api/videos.js

/*

import axios from 'axios';

const API_URL = 'http://localhost:8080/api/videos';

export const getVideos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching videos', error);
    throw error;
  }
};

*/

// src/api/videos.js


// src/api/videos.js

export const getVideos = async () => {
  // Placeholder for actual API call
  return [
    { id: 1, title: "Sample Video 1", description: "Description 1", url: "https://example.com/video1.mp4" },
    { id: 2, title: "Sample Video 2", description: "Description 2", url: "https://example.com/video2.mp4" },
  ];
};

