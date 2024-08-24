import { styled } from '@mui/material';
import { ConfigurationSection, WorkflowMap } from './components';
import { useState } from 'react';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
`;

function WorkflowCreatePage() {
  const [nodeId, setNodeId] = useState<string | undefined>(undefined);
  return (
    <Container>
      <WorkflowMap
        setNodeId={setNodeId}
      />
      <ConfigurationSection
        nodeId={nodeId}
      />
    </Container>
  );
}

export default WorkflowCreatePage;