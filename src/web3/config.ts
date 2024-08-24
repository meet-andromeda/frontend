import {
  createConfig,
  http,
} from 'wagmi';
import { connectorsForWallets, getDefaultWallets } from '@rainbow-me/rainbowkit';
import { mainnet, polygon, polygonZkEvm } from 'viem/chains';
import { networks, rpcUrls } from './constants';

const { wallets } = getDefaultWallets({
  appName: 'Andromeda',
  projectId: 'walletConnectProjectId',
});

const connectors = connectorsForWallets(wallets, {
  appName: 'Andromeda',
  projectId: 'walletConnectProjectId',
});

const config = createConfig({
  chains: networks,
  transports: {
    [mainnet.id]: http(rpcUrls.alchemy.ethereum),
    [polygon.id]: http(rpcUrls.alchemy.polygon),
    [polygonZkEvm.id]: http(rpcUrls.alchemy.polygonZkEvm),
  },
  connectors: [
    ...connectors,
  ],
});

export default config;
