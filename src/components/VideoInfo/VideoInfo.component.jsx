import React from 'react';
import { InfoWrapper, Title } from './styled';

function VideoInfo({ description, title }) {
  return (
    <InfoWrapper>
      <Title>{title}</Title>
      <div>{description}</div>
    </InfoWrapper>
  );
}

export default VideoInfo;
