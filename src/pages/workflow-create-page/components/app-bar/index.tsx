import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useAccount, useBalance } from 'wagmi';
import shortenAddress from 'web3/helpers/shorten-address';
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

const StyledCircleWalletButton = styled(Button)({
  marginLeft: '10px',
  backgroundColor: '#3D4E6A',
  color: 'white',
  '&:hover': {
    backgroundColor: '#3D4E6A',
  },
  width: '250px',
});

export default function ButtonAppBar({ circleUserAddress }:any): any {
  const {
    address,
  } = useAccount();

  const {
    balance,
  } = useGetErc20Balance({
    userAddress: circleUserAddress,
  });

  const { data: balanceDatas } = useBalance({
    address: circleUserAddress,
  });

  const formattedMaticBalance = Number(balanceDatas?.value) / (10 ** 18);
  const displayedMaticBalance = formattedMaticBalance.toFixed(2);

  return (
    <Box sx={{ color: 'white' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            New WerkFlow
          </Typography>
          <HorizontalSpace size="M" />
          <StyledCircleWalletButton
            onClick={() => window.open(`https://polygonscan.com/address/${circleUserAddress}`, '_blank')}
          >
            {shortenAddress(circleUserAddress || '')}
          </StyledCircleWalletButton>

          <HorizontalSpace size="M" />
          <Typography
            sx={{ flexGrow: 1 }}
          >
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
          <Typography>
            Acme Protocol
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
