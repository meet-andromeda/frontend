import { NumberAsString } from 'types';

interface TriggerInformation {
  name?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
  decodingAbi?: boolean;
  abiDecoded?: boolean;
}

export default TriggerInformation;
