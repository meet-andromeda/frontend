import { NumberAsString } from 'types';

interface FaucetActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default FaucetActionInformation;
