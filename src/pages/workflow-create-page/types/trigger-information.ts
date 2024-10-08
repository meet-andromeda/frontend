import { NumberAsString } from 'types';

interface TriggerInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
  decodingAbi?: boolean;
  abiDecoded?: boolean;
}

export default TriggerInformation;
