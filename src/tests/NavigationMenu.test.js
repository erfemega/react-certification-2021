import React from 'react';
import { renderInContext } from './utils/utils';
import NavigationMenu from './../components/NavigationMenu/NavigationMenu';

describe('Rendering SearchBar component', function () {
  const globalContext = {
    globalState: {
      authenticated: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<NavigationMenu />, globalContext);
  });
});
