import {
  mainnet,
  polygon,
  polygonZkEvm,
} from 'viem/chains';

const networks = [
  mainnet,
  polygon,
  polygonZkEvm,
] as const;

export default networks;
