import React from 'react';
import { renderInContext, renderInDetailContext } from './utils/utils';
import FavoriteButton from './../components/FavoriteButton/FavoriteButton';
import { fireEvent, screen } from '@testing-library/dom';
import { GLOBAL_ACTIONS } from '../utils/constants';

describe('Rendering FavoriteButton component', function () {
  let dispatchMock;
  let globalContext;
  let detailContext;
  let functionMock;
  const element = { test: 'test element' };

  beforeEach(() => {
    dispatchMock = jest.fn();
    functionMock = (video) => {
      return true;
    };
    globalContext = {
      globalState: {
        authenticated: true,
        favorites: [],
      },
      dispatch: dispatchMock,
    };
    detailContext = {
      detailState: {
        currentVideo: {},
        relatedVideos: {},
      },
    };
  });

  it('Should render FavoriteButton correctly', function () {
    renderInDetailContext(
      <FavoriteButton video={element} />,
      globalContext,
      detailContext
    );
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('Should remove video from favorites if it is already in favorites', function () {
    globalContext.globalState.favorites = [element];
    renderInDetailContext(
      <FavoriteButton video={element} />,
      globalContext,
      detailContext
    );
    let button = screen.getByRole('button');
    expect(dispatchMock).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.updateFavorites,
      payload: [],
    });
  });

  it('Should add video to favorites if it is not in favorites', function () {
    globalContext.globalState.favorites = [];
    renderInDetailContext(
      <FavoriteButton video={element} />,
      globalContext,
      detailContext
    );
    let button = screen.getByRole('button');
    expect(dispatchMock).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.updateFavorites,
      payload: [element],
    });
  });

  it('Should show "Add to favorites" if video is not in favorites', function () {
    globalContext.globalState.favorites = [];
    renderInDetailContext(
      <FavoriteButton video={element} />,
      globalContext,
      detailContext
    );
    let button = screen.getByText(/add to favorites/i);
    expect(button).toBeInTheDocument();
  });

  it('Should show "Remove from favorites" if video is already in favorites', function () {
    globalContext.globalState.favorites = [element];
    renderInDetailContext(
      <FavoriteButton video={element} />,
      globalContext,
      detailContext
    );
    let button = screen.getByText(/remove from favorites/i);
    expect(button).toBeInTheDocument();
  });
});
