import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { styled } from '@mui/material';
import ConnectionOptionsList from './components/connection-options-list';
import andromedaLogo from 'assets/images/andromeda-logo.svg';
import { useRouter } from 'routes/hooks';

const Logo = styled('img')`
  width: 5rem;
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
    <div>
      <Logo src={andromedaLogo} />
      <ConnectionOptionsList />
    </div>
  );
}

export default LoginPage;
