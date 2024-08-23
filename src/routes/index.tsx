import React, { Suspense } from 'react';
import {
  Route,
  Routes as Switch,
} from 'react-router-dom';
import { routes } from './config';

const LoginPage = React.lazy(() => import(/* webpackChunkName: "LoginPage" */ 'pages/login-page'));

const getComponent = (
  Component: React.LazyExoticComponent<() => JSX.Element | null>,
): JSX.Element => (
  <Suspense>
    <Component />
  </Suspense>
);

function Routes(): JSX.Element | null {
  const unprotectedRoutes = (
    <Route
      path={routes.walletConnection}
      element={getComponent(LoginPage)}
    />
  );

  return (
    <Switch>
      {unprotectedRoutes}
    </Switch>
  );
}

export { Routes };
