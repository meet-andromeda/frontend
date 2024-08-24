const basePath = '';

const routes = {
  basePath,
  home: `${basePath}/login`,
  walletConnection: `${basePath}/login`,
  workflow: `${basePath}/workflow`,
} as const;

export default routes;
