import React from 'react';
import { VideoWrapper } from './styled';

function VideoPlayer({ videoId, title }) {
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <VideoWrapper>
      <iframe title={title} src={url} allowFullScreen />
    </VideoWrapper>
  );
}

export default VideoPlayer;
