import { NumberAsString } from 'types';

interface MintActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
  decodingAbi?: boolean;
  abiDecoded?: boolean;
  wallet?: string;
  amount?: string;
  chainlinkVrfMultiplier?: string;
  destination?: string;
  testWithGoPlus?: string;
}

export default MintActionInformation;
