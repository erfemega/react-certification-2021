import React from 'react';
import { renderInContext } from './utils/utils';
import ProfileButton from './../components/ProfileButton/ProfileButton';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<ProfileButton />, globalContext);
  });
});
