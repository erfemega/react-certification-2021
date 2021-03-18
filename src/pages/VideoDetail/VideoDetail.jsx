import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import RelatedVideosList from '../../components/RelatedVideosList/RelatedVideosList';
import VideoInfo from '../../components/VideoInfo/VideoInfo.component';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { PlayerWrapper, VideoDetailWrapper } from './styled';
import useDetail from '../../hooks/useDetail';

function VideoDetail() {
  const location = useLocation(),
    { id, title, description } = location.state.data;
  const { detailState, updateDetailState } = useDetail();

  useEffect(() => {
    updateDetailState({ id, title, description });
  }, []);
  console.log(detailState);

  return (
    <div>
      <VideoDetailWrapper>
        <PlayerWrapper>
          <VideoPlayer videoId={detailState.currentVideo.id} />
          <VideoInfo
            description={detailState.currentVideo.description}
            title={detailState.currentVideo.title}
          />
        </PlayerWrapper>
        <RelatedVideosList videos={detailState.relatedVideos} />
      </VideoDetailWrapper>
    </div>
  );
}

export default VideoDetail;
