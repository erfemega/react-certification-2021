import React from 'react';
import { InfoWrapper, Title } from './styled';

function VideoInfo({ description, title, children }) {
  return (
    <InfoWrapper>
      <Title>
        {title}
        {children}
      </Title>
      <div>{description}</div>
    </InfoWrapper>
  );
}

export default VideoInfo;
