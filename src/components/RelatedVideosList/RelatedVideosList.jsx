import React from 'react';
import RelatedVideoItem from '../RelatedVideoItem/RelatedVideoItem';
import { ListWrapper } from './styled';

function RelatedVideosList({ videos }) {
  console.log('----', videos);
  let related = videos
    .filter((video) => video.snippet)
    .map((video) => {
      return (
        <RelatedVideoItem
          id={video.id.videoId}
          description={video.snippet.description}
          title={video.snippet.title}
          thumbnail={video.snippet.thumbnails.medium.url}
          key={video.etag}
        />
      );
    });
  return <ListWrapper>{related}</ListWrapper>;
}

export default RelatedVideosList;
