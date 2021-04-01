import React from 'react';
import { renderInContext } from './utils/utils';
import VideoCard from './../components/VideoCard/VideoCard';
import mock from './../mocks/youtube_mock_videos.json';

describe('Rendering SearchBar component', function () {
  const globalContext = {
      globalState: {
        authenticated: false,
      },
    },
    videoMock = mock.items[1];
  it('Should render SearchBar correctly', function () {
    renderInContext(<VideoCard video={videoMock} />, globalContext);
  });
});
