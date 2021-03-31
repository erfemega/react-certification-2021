import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { searchByTerm } from '../repositories/videos';
import { GLOBAL_ACTIONS } from '../utils/constants';
import { storage } from '../utils/storage';
import loginApi from './../api/auth';

export default function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw Error('useGlobal must be used within a GlobalProvider');
  }

  const { globalState, dispatch } = context,
    updateFromNewTerm = async (term) => {
      let result = await searchByTerm(term),
        newState = {
          videos: result.data.items,
          term,
        };
      updateSearchTerm(newState);
    },
    toggleMenu = () => dispatch({ type: GLOBAL_ACTIONS.toggleMenu }),
    toggleTheme = () => dispatch({ type: GLOBAL_ACTIONS.toggleTheme }),
    updateSearchTerm = (searchState) =>
      dispatch({ type: GLOBAL_ACTIONS.setSearch, payload: searchState }),
    closeNavigation = () => dispatch({ type: GLOBAL_ACTIONS.closeMenu }),
    initialize = () => dispatch({ type: GLOBAL_ACTIONS.initialize }),
    login = async (username, password) => {
      try {
        let userData = await loginApi(username, password);
        dispatch({ type: GLOBAL_ACTIONS.login, payload: userData });
        storage.set('isAuth', true);
        storage.set('userData', userData);
      } catch (error) {
        console.error(error);
        dispatch({ type: GLOBAL_ACTIONS.error, payload: 'Invalid credentials.' });
      }
    },
    logout = () => {
      dispatch({ type: GLOBAL_ACTIONS.logout });
      storage.remove('isAuth');
      storage.remove('userData');
    },
    addToFavorites = (providedVideo) => {
      if (!globalState.authenticated) {
        return;
      }
      let newFavorites = [...globalState.favorites, providedVideo];
      dispatch({ type: GLOBAL_ACTIONS.updateFavorites, payload: newFavorites });
      storage.set('favorites', newFavorites);
    },
    removeFromFavorites = (providedVideo) => {
      if (!globalState.authenticated) {
        return;
      }
      let newFavorites = globalState.favorites.filter(
        (item) => JSON.stringify(item) != JSON.stringify(providedVideo)
      );
      dispatch({ type: GLOBAL_ACTIONS.updateFavorites, payload: newFavorites });
      storage.set('favorites', newFavorites);
    },
    videoIsInFavorites = (providedVideo) => {
      if (!globalState.authenticated) {
        return;
      }
      return (
        globalState.favorites.filter(
          (item) => JSON.stringify(item) == JSON.stringify(providedVideo)
        ).length > 0
      );
    };

  return {
    initialize,
    globalState,
    dispatch,
    toggleMenu,
    toggleTheme,
    updateFromNewTerm,
    closeNavigation,
    login,
    logout,
    addToFavorites,
    removeFromFavorites,
    videoIsInFavorites,
  };
}
