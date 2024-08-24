import { styled } from '@mui/material';
import { MintActionInformation, TriggerInformation } from '../types';
import MintActionConfiguration from './mint-action-configuration';
import TriggerConfiguration from './trigger-configuration';
import andromedaLogo from 'assets/images/andromeda-logo.svg';

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
  setTriggerInformation: (triggerInformation: TriggerInformation) => void;
  setMintActionInformation: (MintActionInformation: MintActionInformation) => void;
}

function ConfigurationSection({
  nodeId,
  triggerInformation,
  mintActionInformation,
  setTriggerInformation,
  setMintActionInformation,
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

  return (
    <LogoContainer>
      <Logo src={andromedaLogo} />
    </LogoContainer>
  );
}

export default ConfigurationSection;
