import { fireEvent, screen } from '@testing-library/dom';
import React from 'react';
import BurgerButton from '../components/BurgerButton/BurgerButton';
import { renderInContext } from './utils/utils';
import { GLOBAL_ACTIONS } from './../utils/constants';

describe('Burguer button events', function () {
  let dispatchMock;
  let globalContext;

  beforeEach(() => {
    dispatchMock = jest.fn();
    globalContext = {
      globalState: {},
      dispatch: dispatchMock,
    };
  });

  it('Should be rendered correctly', function () {
    renderInContext(<BurgerButton />);
  });

  it('Should call dispatch when click button', function () {
    renderInContext(<BurgerButton />, globalContext);
    let button = screen.getByRole('button');
    expect(dispatchMock).toHaveBeenCalledTimes(0);
    fireEvent.click(button);
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.toggleMenu });
  });
});
