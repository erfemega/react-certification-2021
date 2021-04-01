import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import RelatedVideoItem from './../components/RelatedVideoItem/RelatedVideoItem';

describe('Rendering RelatedVideoItem component', function () {
  const globalContext = {
      globalState: {},
    },
    detailContext = {
      detailState: {
        currentVideo: {},
        relatedVideos: {},
      },
    };
  it('Should render RelatedVideoItem correctly', function () {
    renderInDetailContext(<RelatedVideoItem />, globalContext, detailContext);
  });
});
