import React from 'react';
import { renderInContext } from './utils/utils';
import ThemeSelector from './../components/ThemeSelector/ThemeSelector';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<ThemeSelector />, globalContext);
  });
});
