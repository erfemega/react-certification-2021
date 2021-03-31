import React from 'react';
import VideosList from '../../components/VideosList/VideosList';
import useGlobal from '../../hooks/useGlobal';
import { Title, Wrapper } from './styled';

function Favorites() {
  const { globalState } = useGlobal();
  return (
    <Wrapper>
      <Title>Your Favorite Videos</Title>
      {globalState.favorites.length > 0 ? (
        <VideosList
          videos={globalState.favorites}
          itemPath="/favoriteDetail"
        ></VideosList>
      ) : (
        <div>
          <p>You dont have any video in this list</p>
          <p>Go to Home and add some videos</p>
        </div>
      )}
    </Wrapper>
  );
}

export default Favorites;
