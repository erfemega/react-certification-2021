import useGlobal from './../hooks/useGlobal';
import { act, renderHook } from '@testing-library/react-hooks';
import GlobalContext from './../context/GlobalContext';
import React from 'react';
import { GLOBAL_ACTIONS } from './../utils/constants';

describe('Testing useGlobal hook functions calls the correct action from context', function () {
  let dispatchMock;
  let globalContext;
  let wrapper;

  beforeEach(() => {
    dispatchMock = jest.fn();
    globalContext = {
      globalState: {},
      dispatch: dispatchMock,
    };
    wrapper = ({ children }) => (
      <GlobalContext.Provider value={globalContext}>{children}</GlobalContext.Provider>
    );
  });

  it('Should use toggleMenu correct action', function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    act(() => {
      result.current.toggleMenu();
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.toggleMenu });
  });

  it('Should use toggleTheme correct action', function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    act(() => {
      result.current.toggleTheme();
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.toggleTheme });
  });

  it('Should use closeNavigation correct action', function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    act(() => {
      result.current.closeNavigation();
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.closeMenu });
  });

  it('Should use updateSearchTerm correct action', function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const newSearchTerm = 'newTerm';
    act(() => {
      result.current.updateSearchTerm(newSearchTerm);
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.setSearch,
      payload: newSearchTerm,
    });
  });

  it('Should use login correct action', async function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const username = 'wizeline';
    const password = 'Rocks!';
    const mockedPayload = {
      avatarUrl:
        'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
      id: '123',
      name: 'Wizeline',
    };
    await act(async () => {
      await result.current.login(username, password);
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.login,
      payload: mockedPayload,
    });
  });

  it('Should use logout correct action', function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    act(() => {
      result.current.logout();
    });
    expect(dispatchMock).toHaveBeenCalledWith({ type: GLOBAL_ACTIONS.logout });
  });

  it('Should addToFavorites using correct action', function () {
    globalContext.globalState.favorites = [];
    globalContext.globalState.authenticated = true;
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const newElement = { test: 'test element' };
    act(() => {
      result.current.addToFavorites(newElement);
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.updateFavorites,
      payload: [newElement],
    });
  });

  it('Should use removeFromFavorites using correct action', function () {
    globalContext.globalState.favorites = [{ test: 'test element' }];
    globalContext.globalState.authenticated = true;
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const element = { test: 'test element' };
    act(() => {
      result.current.removeFromFavorites(element);
    });
    expect(dispatchMock).toHaveBeenCalledWith({
      type: GLOBAL_ACTIONS.updateFavorites,
      payload: [],
    });
  });
});

describe('Testing functions', function () {
  let dispatchMock;
  let globalContext;
  let wrapper;

  beforeEach(() => {
    dispatchMock = jest.fn();
    globalContext = {
      globalState: {},
      dispatch: dispatchMock,
    };
    wrapper = ({ children }) => (
      <GlobalContext.Provider value={globalContext}>{children}</GlobalContext.Provider>
    );
  });
  it('Should return true if video is in favorites', function () {
    globalContext.globalState.favorites = [{ test: 'test element' }];
    globalContext.globalState.authenticated = true;
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const element = { test: 'test element' };
    let videoInFavs = result.current.videoIsInFavorites(element);

    expect(videoInFavs).toBeTruthy();
  });

  it('Should return an error if credentials are invalid', async function () {
    const { result } = renderHook(() => useGlobal(), { wrapper });
    const username = 'invalid';
    const password = 'invalid';
    const errorMessage = 'Username or password invalid';

    await act(async () => {
      try {
        await result.current.login(username, password);
      } catch (error) {
        expect(error.message).toBe(errorMessage);
      }
    });
  });
});
