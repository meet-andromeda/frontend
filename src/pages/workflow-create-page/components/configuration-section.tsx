import { TriggerInformation } from '../types';
import ActionConfiguration from './action-configuration';
import TriggerConfiguration from './trigger-configuration';

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
      <div>
        Please select a node to configure
      </div>
    );
  }

  if (nodeId === '0') {
    return (
      <TriggerConfiguration
        triggerInformation={triggerInformation}
        setTriggerInformation={setTriggerInformation}
      />
    );
  }

  return (
    <ActionConfiguration />
  );
}

export default ConfigurationSection;
