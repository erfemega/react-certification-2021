import React from 'react';
import { Redirect, Route } from 'react-router';

export default function ProtectedRoute({ Component, isAuthenticated, path }) {
  return (
    <Route exact path={path}>
      {(props) => {
        if (isAuthenticated) {
          return <Component />;
        } else {
          return (
            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          );
        }
      }}
    </Route>
  );
}
