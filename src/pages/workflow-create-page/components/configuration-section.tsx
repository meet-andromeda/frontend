import { styled } from '@mui/material';
import { TriggerInformation } from '../types';
import ActionConfiguration from './action-configuration';
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

const Container = styled('div')`
  height: 90vh;
  display:"flex";
`;

interface ConfigurationSectionProps {
  nodeId?: string;
  triggerInformation: TriggerInformation;
  setTriggerInformation: (triggerInformation: TriggerInformation) => void;
}

function ConfigurationSection({
  nodeId,
  triggerInformation,
  setTriggerInformation,
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
      <Container>
        <TriggerConfiguration
          triggerInformation={triggerInformation}
          setTriggerInformation={setTriggerInformation}
        />
      </Container>
    );
  }

  return (
    <Container>
      <ActionConfiguration />
    </Container>
  );
}

export default ConfigurationSection;
