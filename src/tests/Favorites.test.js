import React from 'react';
import { renderInContext } from './utils/utils';
import Favorites from './../pages/Favorites/Favorites';
import mock from './../mocks/youtube_mock_videos.json';
import { fireEvent, screen } from '@testing-library/dom';

describe('Rendering SearchBar component', function () {
  const mockLength = mock.items.length;
  const globalContext = {
    globalState: {
      favorites: mock.items,
    },
  };
  it('Should render Favorites view correctly using mock', function () {
    renderInContext(<Favorites />, globalContext);
    const imgs = screen.getAllByRole('img');
    const links = screen.getAllByRole('link');
    const title = screen.getByText(/your favorite videos/i);
    expect(title).toBeInTheDocument();
    expect(imgs).toHaveLength(mockLength);
    expect(links).toHaveLength(mockLength);
  });

  it('Should render a message when uder does not have any video in favorites', function () {
    globalContext.globalState.favorites = [];
    renderInContext(<Favorites />, globalContext);
    const title = screen.getByText(/your favorite videos/i);
    const message1 = screen.getByText(/you dont have any video in this list/i);
    const message2 = screen.getByText(/go to home and add some videos/i);
    expect(title).toBeInTheDocument();
    expect(message1).toBeInTheDocument();
    expect(message2).toBeInTheDocument();
  });
});
