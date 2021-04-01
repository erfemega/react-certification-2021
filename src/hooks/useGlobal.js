import { useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import { searchByTerm } from '../repositories/videos';

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
    toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' }),
    toggleTheme = () => dispatch({ type: 'TOGGLE_THEME' }),
    updateSearchTerm = (searchState) =>
      dispatch({ type: 'UPDATE_SEARCH_TERM', payload: searchState }),
    setVideos = () => dispatch({ type: 'SET_VIDEOS' });

  return {
    globalState,
    dispatch,
    toggleMenu,
    toggleTheme,
    updateFromNewTerm,
  };
}
