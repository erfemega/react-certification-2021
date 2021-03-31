import React, { useReducer } from 'react';
import GlobalContext from '../../context/GlobalContext';
import { GLOBAL_ACTIONS } from '../../utils/constants';
import { storage } from '../../utils/storage';

function globalReducer(state, action) {
  switch (action.type) {
    case GLOBAL_ACTIONS.initialize: {
      return {};
    }
    case GLOBAL_ACTIONS.setSearch: {
      return {
        ...state,
        term: action.payload.term,
        videos: action.payload.videos,
      };
    }
    case GLOBAL_ACTIONS.toggleMenu: {
      return { ...state, isMenuOpen: !state.isMenuOpen };
    }
    case GLOBAL_ACTIONS.closeMenu: {
      return { ...state, isMenuOpen: false };
    }
    case GLOBAL_ACTIONS.toggleTheme: {
      return { ...state, darkModeEnabled: !state.darkModeEnabled };
    }
    case GLOBAL_ACTIONS.login: {
      const userData = action.payload;
      return {
        ...state,
        userData,
        authenticated: true,
        error: '',
      };
    }
    case GLOBAL_ACTIONS.logout: {
      return {
        ...state,
        authenticated: false,
        userData: {},
      };
    }
    case GLOBAL_ACTIONS.error: {
      return {
        userData: {},
        authenticated: false,
        error: action.payload,
      };
    }
    case GLOBAL_ACTIONS.updateFavorites: {
      return {
        ...state,
        favorites: action.payload,
      };
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
      authenticated: storage.get('isAuth') ? storage.get('isAuth') : false,
      userData: storage.get('userData') ? storage.get('userData') : {},
      error: '',
      favorites: storage.get('favorites') ? storage.get('favorites') : [],
    }),
    context = {
      globalState,
      dispatch,
    };

  return <GlobalContext.Provider value={context} {...props} />;
}
