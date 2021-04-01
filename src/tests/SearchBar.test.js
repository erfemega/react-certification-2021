import React from 'react';
import { renderInContext } from './utils/utils';
import SearchBar from './../components/SearchBar/SearchBar.component';

describe('Rendering SearchBar component', function () {
  const context = {
    globalState: {
      isMenuOpen: false,
    },
  };
  it('Should render SearchBar correctly', function () {
    renderInContext(<SearchBar />);
  });
});
