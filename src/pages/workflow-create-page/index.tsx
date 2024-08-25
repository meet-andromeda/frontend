import { useState } from 'react';
import {
  Alert, Box, styled,
} from '@mui/material';
import { useAccount } from 'wagmi';
import { ConfigurationSection, WorkflowMap } from './components';
import {
  MintActionInformation,
  TriggerInformation,
  SimulationActionInformation,
  TransferActionInformation,
  DiscordActionInformation,
} from './types';
import { useIsAdmin } from 'web3/andromeda-peripherals';
import ButtonAppBar from './components/app-bar';
import useGetUserData from 'hooks/use-get-user-data';
import shortenAddress from 'web3/helpers/shorten-address';

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
  const [mintActionInformation, setMintActionInformation] = useState<MintActionInformation>({});
  const [simulationActionInformation, setSimulationActionInformation] = useState<
  SimulationActionInformation
  >({});
  const [transferActionInformation, setTransferActionInformation] = useState<
  TransferActionInformation
  >({});
  const [discordActionInformation, setDiscordActionInformation] = useState<
  DiscordActionInformation
  >({});
  const {
    address,
  } = useAccount();

  const { circleUserAddress } = useGetUserData(
    address || '',
  );

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

  const walletOptions = [
    {
      value: `${shortenAddress(circleUserAddress || '')} | Acme Wallet | Wallet | System`,
      label: `${shortenAddress(circleUserAddress || '')} | Acme Wallet | Wallet | System`,
    },
    {
      value: '0xAdf...aaEEF | User address | Tenderly | Trigger ',
      label: '0xAdf...aaEEF | User address | Tenderly | Trigger ',
    },
    {
      value: 'Enter Custom...',
      label: 'Enter Custom...',
    },
  ];

  return (
    <StyledBox>
      {banner}
      <ButtonAppBar
        circleUserAddress={circleUserAddress}
      />
      <Container>
        <WorkflowMap
          setNodeId={setNodeId}
        />
        <ConfigurationSection
          nodeId={nodeId}
          walletOptions={walletOptions}
          triggerInformation={triggerInformation}
          setTriggerInformation={setTriggerInformation}
          mintActionInformation={mintActionInformation}
          setMintActionInformation={setMintActionInformation}
          simulationActionInformation={simulationActionInformation}
          setSimulationActionInformation={setSimulationActionInformation}
          transferActionInformation={transferActionInformation}
          setTransferActionInformation={setTransferActionInformation}
          discordActionInformation={discordActionInformation}
          setDiscordActionInformation={setDiscordActionInformation}
        />
      </Container>
    </StyledBox>
  );
}

export default WorkflowCreatePage;
