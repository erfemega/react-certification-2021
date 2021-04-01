import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import FavoriteButton from './../components/FavoriteButton/FavoriteButton';

describe('Rendering FavoriteButton component', function () {
  const globalContext = {
      globalState: {},
    },
    detailContext = {
      detailState: {
        currentVideo: {},
        relatedVideos: {},
      },
    };
  it('Should render FavoriteButton correctly', function () {
    renderInDetailContext(<FavoriteButton />, globalContext, detailContext);
  });
});
