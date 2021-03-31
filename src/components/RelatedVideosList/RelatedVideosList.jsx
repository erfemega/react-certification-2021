import React from 'react';
import RelatedVideoItem from '../RelatedVideoItem/RelatedVideoItem';
import { ListWrapper, Title, Message } from './styled';

function RelatedVideosList({ videos, title }) {
  let related = videos
    .filter((video) => video.snippet)
    .map((video) => {
      return (
        <RelatedVideoItem
          id={video.id.videoId}
          description={video.snippet.description}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          video={video}
          key={video.etag}
        />
      );
    });
  return (
    <ListWrapper>
      <Title>{title}</Title>
      {related.length > 0 ? (
        related
      ) : (
        <Message>You don't have any video in this list.</Message>
      )}
    </ListWrapper>
  );
}

export default RelatedVideosList;
