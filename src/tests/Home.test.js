import React from 'react';
import { screen } from '@testing-library/react';
import mock from './../mocks/youtube_mock_videos.json';
import HomePage from '../pages/Home/Home.page';
import { renderInContext } from './utils/utils';

describe('Rendering home component', function () {
  let context = {
      globalState: {
        videos: mock.items,
      },
    },
    mockLength = mock.items.length;
  it('Should render Home component', function () {
    renderInContext(<HomePage />, context);
    expect(screen.getByText(/try a video/i)).toBeInTheDocument();
  });

  it('Should have a button', function () {
    renderInContext(<HomePage />, context);
    expect(screen.getAllByRole('img')).toHaveLength(mockLength);
    expect(screen.getAllByRole('link')).toHaveLength(mockLength);
  });
});
