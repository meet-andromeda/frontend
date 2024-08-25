import { NumberAsString } from 'types';

interface MintActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
  decodingAbi?: boolean;
  abiDecoded?: boolean;
}

export default MintActionInformation;
