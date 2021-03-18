import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard';

describe('Header', function () {
  const videoMock = {
    title: 'Super Title',
    description: 'Super Description',
    thumbnail: {
      url: 'www.test.com',
    },
  };
  it('Should render the header', function () {
    render(
      <VideoCard
        title={videoMock.title}
        description={videoMock.description}
        thumbnail={videoMock.thumbnail}
      />
    );
  });

  it('Should Contains the videoMock text', function () {
    render(
      <VideoCard
        title={videoMock.title}
        description={videoMock.description}
        thumbnail={videoMock.thumbnail}
      />
    );
    expect(screen.getByText(videoMock.title)).toBeInTheDocument();
    expect(screen.getByText(videoMock.description)).toBeInTheDocument();
    expect(screen.getByAltText(videoMock.title)).toBeInTheDocument();
  });
});
