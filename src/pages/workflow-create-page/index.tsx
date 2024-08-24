import { useState } from 'react';
import { styled } from '@mui/material';
import { ConfigurationSection, WorkflowMap } from './components';

const Container = styled('div')`
display: flex;
flex-direction: row;
`;

function WorkflowCreatePage(): JSX.Element {
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
