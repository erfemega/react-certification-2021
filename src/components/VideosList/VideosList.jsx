import React from 'react';
import { Link } from 'react-router-dom';
import VideoCard from '../VideoCard/VideoCard';
import { List } from './styled';

function VideosList({ videos, itemPath }) {
  let videosList = videos.map((video) => {
    let key = video.etag,
      id = video.id.videoId,
      title = video.snippet.title,
      description = video.snippet.description;
    return (
      <Link
        to={{
          pathname: `${itemPath}/${id}`,
          state: {
            data: {
              id,
              title,
              description,
              video,
            },
          },
        }}
        key={key}
      >
        <VideoCard video={video} />
      </Link>
    );
  });
  return <List>{videosList}</List>;
}

export default VideosList;
