import { useState } from 'react';
import {
  Alert, Box, styled,
} from '@mui/material';
import { useAccount } from 'wagmi';
import { ConfigurationSection, WorkflowMap } from './components';
import { TriggerInformation } from './types';
import { useIsAdmin } from 'web3/andromeda-peripherals';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
`;

const StyledBox = styled(Box)`
  height: 100vh; 
`;

function WorkflowCreatePage(): JSX.Element {
  const [nodeId, setNodeId] = useState<string | undefined>(undefined);
  const [triggerInformation, setTriggerInformation] = useState<TriggerInformation>({});
  const {
    address,
  } = useAccount();

  const { isAdmin, isLoading } = useIsAdmin({ userAddress: address });
  let banner = null;
  if (isLoading) {
    banner = null;
  } else if (!isAdmin) {
    banner = (
      <Box sx={{ width: '100%' }}>
        <Alert severity="warning">
          Sorry, the connected user is not an admin. Please check the transaction status on
          <a href="https://zkevm.polygonscan.com/address/0xC7710E3a9EfaeC22DAcad63705F6fcEfeDe0b9D5#readContract" target="_blank" rel="noopener noreferrer">
            polygonScan
          </a>
        </Alert>
      </Box>
    );
  }

  return (
    <StyledBox>
      {banner}
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

    </StyledBox>
  );
}

export default WorkflowCreatePage;
