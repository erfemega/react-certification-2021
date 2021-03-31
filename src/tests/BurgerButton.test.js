import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import { renderInContext } from './utils/utils';

describe('Burguer button events', function () {
  const context = {
    globalState: {
      isMenuOpen: false,
    },
  };
  it('Should be rendered correctly', function () {
    renderInContext(<BurgerButton />);
  });

  it('Should change isMenuOpen from global state when is clicked', function () {
    renderInContext(<BurgerButton />, context);

    let button = screen.getByRole('button');
    fireEvent.click(button);
  });
});
