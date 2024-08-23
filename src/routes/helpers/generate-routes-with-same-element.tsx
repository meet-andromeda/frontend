import { Route } from 'react-router-dom';

interface GenerateRoutesWithSameElementParams {
  paths: string[];
  Element: JSX.Element;
}

function generateRoutesWithSameElement({
  paths,
  Element,
}: GenerateRoutesWithSameElementParams): JSX.Element[] {
  return paths.map((path) => <Route key={path} path={path} element={Element} />);
}

export default generateRoutesWithSameElement;
