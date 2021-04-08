import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Header from '../components/Header';
import { renderInContext } from './utils/utils';
import { GLOBAL_ACTIONS } from '../utils/constants';

describe('Rendering Header component', function () {
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
    };
  });

  it('Should render Header', function () {
    renderInContext(<Header />, globalContext);
    expect(screen.getByText(/dark mode/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/browse something/i)).toBeInTheDocument();
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('button')).toHaveLength(2);
  });
});
