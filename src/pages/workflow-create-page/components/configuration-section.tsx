import { styled } from '@mui/material';
import {
  DiscordActionInformation,
  FaucetActionInformation,
  MintActionInformation,
  SimulationActionInformation,
  TriggerInformation,
} from '../types';
import MintActionConfiguration from './mint-action-configuration';
import TriggerConfiguration from './trigger-configuration';
import andromedaLogo from 'assets/images/andromeda-logo.svg';
import FaucetActionConfiguration from './faucet-action-configuration';
import SimulationActionConfiguration from './simulation-action-configuration';
import DiscordActionConfiguration from './discord-action-configuration';

const LogoContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
`;

const Logo = styled('img')`
  width: 20rem;
  margin: 0;
  padding: 0;  
`;

interface ConfigurationSectionProps {
  nodeId?: string;
  triggerInformation: TriggerInformation;
  mintActionInformation: MintActionInformation;
  faucetActionInformation: FaucetActionInformation;
  simulationActionInformation: SimulationActionInformation;
  discordActionInformation: DiscordActionInformation;
  setTriggerInformation: (triggerInformation: TriggerInformation) => void;
  setMintActionInformation: (mintActionInformation: MintActionInformation) => void;
  setFaucetActionInformation: (faucetActionInformation: FaucetActionInformation) => void;
  setSimulationActionInformation: (
    simulationActionInformation: SimulationActionInformation
  ) => void;
  setDiscordActionInformation: (dicordActionInformation: DiscordActionInformation) => void;
}

function ConfigurationSection({
  nodeId,
  triggerInformation,
  mintActionInformation,
  faucetActionInformation,
  simulationActionInformation,
  discordActionInformation,
  setTriggerInformation,
  setMintActionInformation,
  setFaucetActionInformation,
  setSimulationActionInformation,
  setDiscordActionInformation,
}: ConfigurationSectionProps): JSX.Element {
  if (!nodeId) {
    return (
      <LogoContainer>
        <Logo src={andromedaLogo} />
      </LogoContainer>
    );
  }

  if (nodeId === '0') {
    return (
      <div>
        <TriggerConfiguration
          triggerInformation={triggerInformation}
          setTriggerInformation={setTriggerInformation}
        />
      </div>
    );
  }

  if (nodeId === '1') {
    return (
      <MintActionConfiguration
        mintActionInformation={mintActionInformation}
        setMintActionInformation={setMintActionInformation}
      />
    );
  }

  if (nodeId === '2') {
    return (
      <FaucetActionConfiguration
        faucetActionInformation={faucetActionInformation}
        setFaucetActionInformation={setFaucetActionInformation}
      />
    );
  }

  if (nodeId === '3') {
    return (
      <SimulationActionConfiguration
        simulationActionInformation={simulationActionInformation}
        setSimulationActionInformation={setSimulationActionInformation}
      />
    );
  }

  if (nodeId === '4') {
    return (
      <DiscordActionConfiguration
        discordActionInformation={discordActionInformation}
        setDiscordActionInformation={setDiscordActionInformation}
      />
    );
  }

  return (
    <LogoContainer>
      <Logo src={andromedaLogo} />
    </LogoContainer>
  );
}

export default ConfigurationSection;
