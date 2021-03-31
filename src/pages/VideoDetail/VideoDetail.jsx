import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import RelatedVideosList from '../../components/RelatedVideosList/RelatedVideosList';
import VideoInfo from '../../components/VideoInfo/VideoInfo.component';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import { PlayerWrapper, VideoDetailWrapper } from './styled';
import useDetail from '../../hooks/useDetail';
import FavoriteButton from '../../components/FavoriteButton/FavoriteButton';
import useGlobal from '../../hooks/useGlobal';

function VideoDetail() {
  const { detailState, updateDetailState } = useDetail();
  const { globalState } = useGlobal();
  const location = useLocation();
  const history = useHistory();
  let id, title, description, video;

  useEffect(() => {
    if (location.state) {
      id = location.state.data.id;
      title = location.state.data.title;
      description = location.state.data.description;
      video = location.state.data.video;
    } else {
      updateDetailState({});
      history.push('/');
    }
  }, []);

  useEffect(() => {
    updateDetailState({ id, title, description, video });
  }, [id, title, description, video]);
  return (
    <div>
      <VideoDetailWrapper>
        <PlayerWrapper>
          <VideoPlayer videoId={detailState.currentVideo.id} />

          <VideoInfo
            description={detailState.currentVideo.description}
            title={detailState.currentVideo.title}
          >
            {globalState.authenticated ? (
              <FavoriteButton video={detailState.currentVideo.video} />
            ) : (
              ''
            )}
          </VideoInfo>
        </PlayerWrapper>
        <RelatedVideosList videos={detailState.relatedVideos} title="Related videos" />
      </VideoDetailWrapper>
    </div>
  );
}

export default VideoDetail;
