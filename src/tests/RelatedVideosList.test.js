import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import RelatedVideosList from './../components/RelatedVideosList/RelatedVideosList';
import mock from './../mocks/youtube_mock_videos.json';

describe('Rendering RelatedVideosList component', function () {
  const globalContext = {
      globalState: {},
    },
    detailContext = {
      detailState: {
        currentVideo: {},
        relatedVideos: mock.items,
      },
    };
  it('Should render RelatedVideosList correctly', function () {
    renderInDetailContext(
      <RelatedVideosList videos={mock.items} />,
      globalContext,
      detailContext
    );
  });
});
