import { NumberAsString } from 'types';

interface TriggerInformation {
  name?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default TriggerInformation;
