import { styled } from '@mui/material';
import { TriggerInformation } from '../types';
import ActionConfiguration from './action-configuration';
import TriggerConfiguration from './trigger-configuration';

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
      <Container>
        Please select a node to configure
      </Container>
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
