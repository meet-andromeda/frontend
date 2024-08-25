import { NumberAsString } from 'types';

interface TransferActionInformation {
  app?: string;
  network?: NumberAsString;
  wallet?: string;
  token?: string;
  destination?: string;
  amount?: string;
  testWithGoPlus?: string;
}

export default TransferActionInformation;
