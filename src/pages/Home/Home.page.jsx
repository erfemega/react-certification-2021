import React from 'react';
import VideosList from '../../components/VideosList/VideosList';
import useGlobal from '../../hooks/useGlobal';
import { Title, Wrapper } from './styled';

function HomePage() {
  const { globalState } = useGlobal();
  return (
    <Wrapper>
      <Title>Try a Video</Title>
      <VideosList videos={globalState.videos} itemPath="/detail" />
    </Wrapper>
  );
}

export default HomePage;
