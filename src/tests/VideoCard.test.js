import React from 'react';
import { renderInContext } from './utils/utils';
import VideoCard from './../components/VideoCard/VideoCard';
import mock from './../mocks/youtube_mock_videos.json';
import { fireEvent, render, screen } from '@testing-library/react';

describe('Rendering VideoCard component', function () {
  const globalContext = {
      globalState: {
        authenticated: false,
      },
    },
    videoMock = mock.items[1];
  it('Should render VideoCard correctly', function () {
    renderInContext(<VideoCard video={videoMock} />, globalContext);
    const title = screen.getByText(videoMock.snippet.title);
    const description = screen.getByText(videoMock.snippet.description);
    const img = screen.getByRole('img');
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
