import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useAccount, useBalance } from 'wagmi';
import shortenAddress from 'web3/helpers/shorten-address';
// import useGetUserData from 'hooks/use-get-user-data';
import { HorizontalSpace } from 'components/spacing';
import useGetErc20Balance from 'hooks/use-get-erc20-balance';

const StyledButton = styled(Button)({
  marginLeft: '10px',
  backgroundColor: '#3D4E6A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#3D4E6A',
  },
  width: '150px',
});

export default function ButtonAppBar(): any {
  const {
    address,
  } = useAccount();
  /* const data = useGetUserData(
    address || '',
  ); */

  const {
    balance,
  } = useGetErc20Balance({
    userAddress: address,
  });

  const { data: balanceDatas } = useBalance({
    address,
  });

  const formattedMaticBalance = Number(balanceDatas?.value) / (10 ** 18);
  const displayedMaticBalance = formattedMaticBalance.toFixed(2);

  return (
    <Box sx={{ flexGrow: 1, color: 'white' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            New WerkFlow
          </Typography>
          <Typography>
            Acme Protocol
          </Typography>
          <StyledButton
            onClick={() => window.open(`https://polygonscan.com/address/${address}`, '_blank')}
          >
            {shortenAddress(address || '')}
          </StyledButton>
          <HorizontalSpace size="M" />
          <Typography>
            Circle Wallet balance:
            {' '}
            {balance}
            {' '}
            USDC
            |
            {' '}
            {displayedMaticBalance}
            {' '}
            MATIC
          </Typography>
          <StyledButton
            onClick={() => window.open(`https://polygonscan.com/address/${address}`, '_blank')}
          >
            {shortenAddress(address || '')}
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
