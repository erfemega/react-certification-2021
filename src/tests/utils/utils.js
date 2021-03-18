import React from 'react';
import { Router } from 'react-router';
import GlobalProvider from '../../providers/Global/Global.provider';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';

export function renderInContext(element) {
  const history = createMemoryHistory();
  return render(
    <Router history={history}>
      <GlobalProvider>{element}</GlobalProvider>
    </Router>
  );
}
