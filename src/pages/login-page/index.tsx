import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { styled } from '@mui/material';
import ConnectionOptionsList from './components/connection-options-list';
import andromedaLogo from 'assets/images/andromeda-logo.svg';
import { useRouter } from 'routes/hooks';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
`;

const Logo = styled('img')`
  width: 15rem;
  margin: 0;
  padding: 0;  
`;

function LoginPage(): JSX.Element {
  const {
    isConnected,
  } = useAccount();

  const router = useRouter();

  useEffect(() => {
    if (isConnected) {
      router.goToWorkflowCreatePage();
    }
  });

  return (
    <Container>
      <Logo src={andromedaLogo} />
      <ConnectionOptionsList />
    </Container>
  );
}

export default LoginPage;
