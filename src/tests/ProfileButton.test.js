import React from 'react';
import { renderInContext } from './utils/utils';
import ProfileButton from './../components/ProfileButton/ProfileButton';
import { fireEvent, screen } from '@testing-library/dom';

describe('Rendering SearchBar component', function () {
  let dispatchMock;
  let globalContext;

  beforeEach(() => {
    dispatchMock = jest.fn();
    globalContext = {
      globalState: {
        authenticated: false,
      },
      dispatch: dispatchMock,
    };
  });

  it('Should render SearchBar correctly', function () {
    renderInContext(<ProfileButton />, globalContext);
    let button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
