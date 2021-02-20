import React from 'react';
import { Container, Image, Title, Description } from './styled';

function VideoCard({ title, thumbnail, description }) {
  return (
    <Container>
      <Image src={thumbnail.url} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
}

export default VideoCard;
