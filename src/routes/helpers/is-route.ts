import { routes } from 'routes/config';
import Route from 'routes/types/route';

function belongsToRoutesList(route: string): boolean {
  const routeValues = Object.values(routes);

  return routeValues.some((currentRouteValue) => currentRouteValue === route);
}

function isRoute(route: unknown): route is Route {
  return (
    route !== null
    && typeof route === 'string'
    && belongsToRoutesList(route)
  );
}

export default isRoute;
