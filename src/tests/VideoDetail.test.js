import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import VideoDetail from './../pages/VideoDetail/VideoDetail';
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
        relatedVideos: mock.items,
      },
    };
  it('Should render SearchBar correctly', function () {
    renderInDetailContext(<VideoDetail />, globalContext, detailContext);
  });
});
