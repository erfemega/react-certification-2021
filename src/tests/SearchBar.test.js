import React from 'react';
import { renderInContext } from './utils/utils';
import SearchBar from './../components/SearchBar/SearchBar.component';
import { fireEvent, render, screen } from '@testing-library/react';
import { GLOBAL_ACTIONS } from '../utils/constants';

describe('Rendering SearchBar component', function () {
  let dispatchMock;
  let globalContext;

  beforeEach(() => {
    dispatchMock = jest.fn();
    globalContext = {
      globalState: {
        authenticated: true,
        userData: {
          id: '123',
          name: 'Wizeline',
          avatarUrl:
            'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
        },
      },
      updateFromNewTerm: dispatchMock,
    };
  });

  it('Should render SearchBar correctly', function () {
    renderInContext(<SearchBar />, globalContext);
  });
});
