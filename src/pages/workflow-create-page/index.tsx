import { useState } from 'react';
import { styled } from '@mui/material';
import { ConfigurationSection, WorkflowMap } from './components';
import { TriggerInformation } from './types';

const Container = styled('div')`
display: flex;
flex-direction: row;
`;

function WorkflowCreatePage(): JSX.Element {
  const [nodeId, setNodeId] = useState<string | undefined>(undefined);
  const [triggerInformation, setTriggerInformation] = useState<TriggerInformation>({});

  return (
    <Container>
      <WorkflowMap
        setNodeId={setNodeId}
      />
      <ConfigurationSection
        nodeId={nodeId}
        triggerInformation={triggerInformation}
        setTriggerInformation={setTriggerInformation}
      />
    </Container>
  );
}

export default WorkflowCreatePage;
