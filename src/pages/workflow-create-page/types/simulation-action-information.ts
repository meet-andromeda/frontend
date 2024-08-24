import { NumberAsString } from 'types';

interface SimulationActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default SimulationActionInformation;
