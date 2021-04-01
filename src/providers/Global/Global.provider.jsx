import React, { useReducer, useState } from 'react';
import GlobalContext from '../../context/GlobalContext';

function globalReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_SEARCH_TERM': {
      console.log(action.payload);
      return {
        ...state,
        term: action.payload.term,
        videos: action.payload.videos,
      };
    }
    case 'TOGGLE_MENU': {
      return { ...state, isMenuOpen: !state.isMenuOpen };
    }
    case 'TOGGLE_THEME': {
      return { ...state, darkModeEnabled: !state.darkModeEnabled };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export default function GlobalProvider(props) {
  const [globalState, dispatch] = useReducer(globalReducer, {
      isMenuOpen: false,
      darkModeEnabled: false,
      searchTerm: '',
      videos: [],
    }),
    context = {
      globalState,
      dispatch,
    };

  return <GlobalContext.Provider value={context} {...props} />;
}
