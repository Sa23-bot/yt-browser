import React from "react";
import './videoitem.css';

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        className="ui image"
        src={video.snippet.thumbnails.high.url}
        alt="video feteching from youtube"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
