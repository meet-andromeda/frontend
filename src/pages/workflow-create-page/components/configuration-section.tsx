import ActionConfiguration from "./action-configuration";
import TriggerConfiguration from "./trigger-configuration";

interface ConfigurationSectionProps {
  nodeId?: string;
}

function ConfigurationSection ({
  nodeId,
}: ConfigurationSectionProps): JSX.Element {
  if (!nodeId) {
    return (
      <div>
        Please select a node to configure
      </div>
    )
  }

  if (nodeId === '0') {
    return (
        <TriggerConfiguration />
    )
  }

  return (
    <ActionConfiguration />
  )
}

export default ConfigurationSection;