import { NumberAsString } from 'types';

interface DiscordActionInformation {
  app?: string;
  network?: NumberAsString;
  contractAddress?: string;
  event?: string;
}

export default DiscordActionInformation;
