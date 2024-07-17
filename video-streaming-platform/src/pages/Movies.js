import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoList from '../components/VideoList';
import { getVideos } from '../api/videos'; // Ensure this path is correct

const Movies = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const videoData = await getVideos();
      setVideos(videoData);
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Movies</h1>
        <VideoList videos={videos} />
      </main>
      <Footer />
    </div>
  );
};

export default Movies;
