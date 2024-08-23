import { alchemyEthereumApiKey, alchemyPolygonApiKey } from 'config';
import networkNames from './network-names';

const rpcUrls: Record<string, Record<string, string>> = {
  alchemy: {
    [networkNames.ethereum]: `https://eth-mainnet.g.alchemy.com/v2/${alchemyEthereumApiKey}`,
    [networkNames.polygon]: `https://polygon-mainnet.g.alchemy.com/v2/${alchemyPolygonApiKey}`,
  },
} as const;

export default rpcUrls;
