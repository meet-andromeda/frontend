import { styled } from '@mui/material';
import {
  DiscordActionInformation,
  TransferActionInformation,
  MintActionInformation,
  SimulationActionInformation,
  TriggerInformation,
} from '../types';
import MintActionConfiguration from './mint-action-configuration';
import TriggerConfiguration from './trigger-configuration';
import andromedaLogo from 'assets/images/andromeda-logo.svg';
import TransferActionConfiguration from './transfer-action-configuration';
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
  walletOptions: any;
  triggerInformation: TriggerInformation;
  mintActionInformation: MintActionInformation;
  transferActionInformation: TransferActionInformation;
  simulationActionInformation: SimulationActionInformation;
  discordActionInformation: DiscordActionInformation;
  setTriggerInformation: (triggerInformation: TriggerInformation) => void;
  setMintActionInformation: (mintActionInformation: MintActionInformation) => void;
  setTransferActionInformation: (transferActionInformation: TransferActionInformation) => void;
  setSimulationActionInformation: (
    simulationActionInformation: SimulationActionInformation
  ) => void;
  setDiscordActionInformation: (dicordActionInformation: DiscordActionInformation) => void;
}

function ConfigurationSection({
  nodeId,
  walletOptions,
  triggerInformation,
  mintActionInformation,
  transferActionInformation,
  simulationActionInformation,
  discordActionInformation,
  setTriggerInformation,
  setMintActionInformation,
  setTransferActionInformation,
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
        walletOptions={walletOptions}
        mintActionInformation={mintActionInformation}
        setMintActionInformation={setMintActionInformation}
      />
    );
  }

  if (nodeId === '2') {
    return (
      <TransferActionConfiguration
        walletOptions={walletOptions}
        transferActionInformation={transferActionInformation}
        setTransferActionInformation={setTransferActionInformation}
      />
    );
  }

  if (nodeId === '3') {
    return (
      <DiscordActionConfiguration
        discordActionInformation={discordActionInformation}
        setDiscordActionInformation={setDiscordActionInformation}
      />
    );
  }

  if (nodeId === '4') {
    return (
      <SimulationActionConfiguration
        simulationActionInformation={simulationActionInformation}
        setSimulationActionInformation={setSimulationActionInformation}
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
