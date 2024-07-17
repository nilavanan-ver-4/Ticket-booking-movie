import React from 'react';
import './VideoList.css';

const VideoList = ({ videos }) => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <h3>{video.title}</h3>
          <p>{video.description}</p>
          <a href={video.url} target="_blank" rel="noopener noreferrer">Watch</a>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
