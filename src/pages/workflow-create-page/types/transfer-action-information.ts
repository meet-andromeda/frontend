import { NumberAsString } from 'types';

interface TransferActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default TransferActionInformation;
