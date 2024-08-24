import { useState } from 'react';
import {
  Alert, Box, styled,
} from '@mui/material';
import { useAccount } from 'wagmi';
import { ConfigurationSection, WorkflowMap } from './components';
import { TriggerInformation } from './types';
import { useIsAdmin } from 'web3/andromeda-peripherals';
import ButtonAppBar from './components/app-bar';

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  border: 0.25rem solid #ddd;
  
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
          Not whitelisted but you can still use our trial version 🫰
          Please check the contract status on 👉
          <a href="https://zkevm.polygonscan.com/address/0xC7710E3a9EfaeC22DAcad63705F6fcEfeDe0b9D5#readContract" target="_blank" rel="noopener noreferrer">
            polygonZkEVM
          </a>
        </Alert>
      </Box>
    );
  }

  return (
    <StyledBox>
      {banner}
      <ButtonAppBar />
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
