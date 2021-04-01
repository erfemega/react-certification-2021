import React, { useContext } from 'react';
import VideosList from '../../components/VideosList/VideosList';
import useGlobal from '../../hooks/useGlobal';
import './Home.styles.css';
import { Title, Wrapper } from './styled';

function HomePage() {
  const { globalState } = useGlobal();
  return (
    <Wrapper>
      <Title>Try a Video</Title>
      <VideosList videos={globalState.videos} />
    </Wrapper>
  );
}

export default HomePage;
