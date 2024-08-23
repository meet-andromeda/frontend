import { useNavigate, useLocation } from 'react-router-dom';
import { useCallback, useMemo } from 'react';
import { routes } from 'routes/config';
import { UseRouterResponse, PageParams } from '../types';
import {
  isLocationState,
} from '../helpers';
import { getQueryString } from 'helpers/api-requests/url-builder';

type RedirectToParams = {
  route: string;
  queryParams?: Record<string, string | number | boolean | undefined>;
  state?: Record<string, unknown>;
} & PageParams;

function useRouter(): UseRouterResponse {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRoute = location.pathname;
  const previousRoute = isLocationState(location.state)
    ? location.state.from
    : routes.home;

  const redirectTo = useCallback(({
    route,
    shouldReplaceInHistory = false,
    state = {},
    queryParams,
  }: RedirectToParams): void => {
    const newRoute = queryParams && Object.keys(queryParams).length
      ? `${route}?${getQueryString(queryParams)}`
      : route;
    if (shouldReplaceInHistory) {
      navigate(newRoute, { state });
      return;
    }

    const lastRoute = (currentRoute !== routes.walletConnection)
      ? currentRoute
      : previousRoute;

    navigate(newRoute, { state: { ...state, from: lastRoute } });
  }, [
    currentRoute,
    previousRoute,
    navigate,
  ]);

  return useMemo(() => ({
    previousRoute,
    goToHomePage: (params = {}) => redirectTo({
      route: routes.home,
      shouldReplaceInHistory: params.shouldReplaceInHistory,
    }),
    goToWalletConnectionPage: (params = {}) => redirectTo({
      route: routes.walletConnection,
      shouldReplaceInHistory: params.shouldReplaceInHistory,
    }),
    goToPreviousPage: (params = {}) => redirectTo({
      route: previousRoute,
      shouldReplaceInHistory: false,
      state: params.state,
    }),
  }), [previousRoute, redirectTo]);
}

export default useRouter;
