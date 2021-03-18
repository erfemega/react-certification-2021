import React from 'react';
import VideoCard from '../VideoCard/VideoCard';
import { List } from './styled';

function VideosList({ videos }) {
  let videosList = videos
    .filter((video) => video.id.kind !== 'youtube#channel')
    .map((video) => {
      let id = video.id.videoId,
        { title, thumbnails, description } = video.snippet;
      return (
        <VideoCard
          key={id}
          title={title}
          thumbnail={thumbnails.medium}
          description={description}
        />
      );
    });
  return <List>{videosList}</List>;
}

export default VideosList;
