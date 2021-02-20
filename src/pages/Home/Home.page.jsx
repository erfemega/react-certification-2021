import React from 'react';
import VideosList from '../../components/VideosList/VideosList';
import mock from './../../mocks/youtube_mock_videos.json';
import './Home.styles.css';

function HomePage() {
  return (
    <section className="homepage">
      <h2>Try a Video</h2>
      <VideosList videos={mock.items} />
    </section>
  );
}

export default HomePage;
