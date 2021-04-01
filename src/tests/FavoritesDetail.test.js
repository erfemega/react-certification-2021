import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import FavoriteDetail from './../pages/FavoriteDetail/FavoriteDetail';
import mock from './../mocks/youtube_mock_videos.json';

describe('Rendering SearchBar component', function () {
  const globalContext = {
      globalState: {
        favorites: mock.items,
      },
    },
    detailContext = {
      detailState: {
        currentVideo: mock.items[1],
      },
    };
  it('Should render SearchBar correctly', function () {
    renderInDetailContext(<FavoriteDetail />, globalContext, detailContext);
  });
});
