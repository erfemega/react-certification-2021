import { useContext } from 'react';
import SearchContext from '../context/SearchContext';
import { searchByTerm } from '../repositories/videos';

function useSearchBar() {
  const context = useContext(SearchContext);
  if (!context) {
    throw Error('useSearchBar must be used within a SearchProvider');
  }
  const { searchState, setSearchState } = context,
    updateFromNewTerm = async (term) => {
      let result = await searchByTerm(term),
        newState = {
          videos: result.data.items,
          term,
        };
      setSearchState(newState);
    };

  return {
    searchState,
    setSearchState,
    updateFromNewTerm,
  };
}

export default useSearchBar;
