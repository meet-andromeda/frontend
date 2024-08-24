import { styled } from '@mui/material';
import { TriggerConfiguration, WorkflowMap } from './components';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
`;

function WorkflowCreatePage() {
  return (
    <Container>
      <WorkflowMap />
      <TriggerConfiguration />
    </Container>
  );
}

export default WorkflowCreatePage;