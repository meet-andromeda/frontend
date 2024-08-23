import { routes } from '../config';

type Keys = keyof typeof routes;
type Route = typeof routes[Keys];

export default Route;
