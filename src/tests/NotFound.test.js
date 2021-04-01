import React from 'react';
import { renderInContext } from './utils/utils';
import NotFound from './../pages/NotFound/NotFound.page';
import mock from './../mocks/youtube_mock_videos.json';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      favorites: mock.items,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<NotFound />, globalContext);
  });
});
