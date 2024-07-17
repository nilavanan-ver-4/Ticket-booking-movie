import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <h2>{video.title}</h2>
      <video controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
};

export default VideoPlayer;
