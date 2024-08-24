import { NumberAsString } from 'types';

interface MintActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default MintActionInformation;
