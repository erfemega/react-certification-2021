import React, { useLayoutEffect } from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import { random } from '../../utils/fns';
import VideoDetail from '../../pages/VideoDetail/VideoDetail';
import DetailContextProvider from '../../providers/Detail/Detail.provider';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './../../themes/themes';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import useGlobal from '../../hooks/useGlobal';

function App() {
  const { globalState } = useGlobal(),
    getTheme = (darkModeEnabled) => {
      return darkModeEnabled ? dark : light;
    };
  useLayoutEffect(() => {
    const { body } = document;

    function rotateBackground() {
      const xPercent = random(100);
      const yPercent = random(100);
      body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
    }

    const intervalId = setInterval(rotateBackground, 3000);
    body.addEventListener('click', rotateBackground);

    return () => {
      clearInterval(intervalId);
      body.removeEventListener('click', rotateBackground);
    };
  }, []);

  return (
    <ThemeProvider theme={getTheme(globalState.darkModeEnabled)}>
      <GlobalStyles />
      <HashRouter>
        <AuthProvider>
          <Layout>
            <NavigationMenu />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/detail">
                <DetailContextProvider>
                  <VideoDetail />
                </DetailContextProvider>
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AuthProvider>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
