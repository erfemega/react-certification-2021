import React from 'react';
import { Container, Image, Title, Description } from './styled';

function VideoCard({ video }) {
  const { title, thumbnails, description } = video.snippet;
  return (
    <Container>
      <Image src={thumbnails.medium.url} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default VideoCard;
