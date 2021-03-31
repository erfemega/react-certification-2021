import React from 'react';
import { Router } from 'react-router';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import GlobalContext from '../../context/GlobalContext';
import useGlobal from '../../hooks/useGlobal';

export function renderInContext(element, contextProps = {}) {
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <GlobalContext.Provider value={contextProps}>{element} </GlobalContext.Provider>
    </Router>
  );
}
