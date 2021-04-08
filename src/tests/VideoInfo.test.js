import React from 'react';
import { renderInContext } from './utils/utils';
import VideoInfo from './../components/VideoInfo/VideoInfo.component';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<VideoInfo />, globalContext);
  });
});
