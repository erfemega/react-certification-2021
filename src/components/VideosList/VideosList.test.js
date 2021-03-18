import React from 'react';
import { render, screen } from '@testing-library/react';
import VideosList from './VideosList';
import videosMock from './../../mocks/youtube_mock_videos.json';

describe('Header', function () {
  it('Should render the header', function () {
    render(<VideosList videos={videosMock.items} />);
  });
});
