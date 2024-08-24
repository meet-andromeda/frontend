import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useAccount } from 'wagmi';
import shortenAddress from 'web3/helpers/shorten-address';

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
          <StyledButton>
            {shortenAddress(address || '')}
          </StyledButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
