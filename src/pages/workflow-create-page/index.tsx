import { useState } from 'react';
import { styled } from '@mui/material';
// import { useAccount } from 'wagmi';
import { ConfigurationSection, WorkflowMap } from './components';
import { TriggerInformation } from './types';
// import { useIsAdmin } from 'web3/andromeda-peripherals';

const Container = styled('div')`
display: flex;
flex-direction: row;
`;

function WorkflowCreatePage(): JSX.Element {
  const [nodeId, setNodeId] = useState<string | undefined>(undefined);
  const [triggerInformation, setTriggerInformation] = useState<TriggerInformation>({});
  // const {
  //   address,
  // } = useAccount();

  // const { isAdmin, isLoading } = useIsAdmin({ userAddress: address });
  // if (!isAdmin && !isLoading) {
  //   return (
  //     <div>
  //       <pre>:-(</pre>
  //       <p>Sorry, the connected user is not an admin.</p>
  //     </div>
  //   );
  // }

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
