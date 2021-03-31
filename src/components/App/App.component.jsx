import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail/VideoDetail';
import DetailContextProvider from '../../providers/Detail/Detail.provider';
import NavigationMenu from '../NavigationMenu/NavigationMenu';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './../../themes/themes';
import { GlobalStyles } from '../GlobalStyles/GlobalStyles';
import useGlobal from '../../hooks/useGlobal';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Favorites from '../../pages/Favorites/Favorites';
import FavoriteDetail from '../../pages/FavoriteDetail/FavoriteDetail';

function App() {
  const { globalState } = useGlobal(),
    getTheme = (darkModeEnabled) => {
      return darkModeEnabled ? dark : light;
    };

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
              <ProtectedRoute
                path="/favorites"
                isAuthenticated={globalState.authenticated}
                Component={Favorites}
              />
              <DetailContextProvider>
                <ProtectedRoute
                  path="/favoriteDetail"
                  isAuthenticated={globalState.authenticated}
                  Component={FavoriteDetail}
                />
              </DetailContextProvider>
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
