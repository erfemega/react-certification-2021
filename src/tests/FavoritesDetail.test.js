import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import FavoriteDetail from './../pages/FavoriteDetail/FavoriteDetail';
import mock from './../mocks/youtube_mock_videos.json';
import { fireEvent, screen } from '@testing-library/dom';

describe('Rendering FavoritesDetail component', function () {
  const globalContext = {
      globalState: {
        favorites: [mock.items[1]],
      },
    },
    detailContext = {
      detailState: {
        currentVideo: mock.items[1],
      },
    };
  it('Should render FavoritesDetail view correctly when user is authenticated', function () {
    globalContext.globalState.authenticated = false;
    renderInDetailContext(<FavoriteDetail />, globalContext, detailContext);
    const videoTitle = screen.getByText(
      detailContext.detailState.currentVideo.snippet.title
    );
    expect(videoTitle).toBeInTheDocument();
  });
});
