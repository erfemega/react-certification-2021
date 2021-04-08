import React from 'react';
import { renderInContext } from './utils/utils';
import ThemeSelector from './../components/ThemeSelector/ThemeSelector';
import { fireEvent, screen } from '@testing-library/dom';
import { GLOBAL_ACTIONS } from '../utils/constants';

describe('Rendering themeSelector component', function () {
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
      dispatch: dispatchMock,
    };
  });

  it('Should render themeSelector correctly', function () {
    renderInContext(<ThemeSelector />, globalContext);
  });

  it('Should dispatch toggleTheme action when click on dark mode button', function () {
    renderInContext(<ThemeSelector />, globalContext);
    const toggleButton = screen.getByText(/dark mode/i);
    expect(dispatchMock).toHaveBeenCalledTimes(0);
    fireEvent.click(toggleButton);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.toggleTheme });
  });
});
