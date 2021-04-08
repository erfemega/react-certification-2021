import React from 'react';
import { renderInContext } from './utils/utils';
import VideoPlayer from './../components/VideoPlayer/VideoPlayer';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<VideoPlayer />, globalContext);
  });
});
