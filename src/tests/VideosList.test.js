import React from 'react';
import { renderInContext } from './utils/utils';
import VideosList from './../components/VideosList/VideosList';
import mock from './../mocks/youtube_mock_videos.json';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<VideosList videos={mock.items} />, globalContext);
  });
});
