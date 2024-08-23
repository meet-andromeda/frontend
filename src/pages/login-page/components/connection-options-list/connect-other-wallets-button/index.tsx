import {
  useState,
  useEffect,
} from 'react';
import { styled } from '@mui/material';
import { walletLogos } from 'web3/constants';
import { SecondaryButton } from 'components/buttons';

const WalletIcon = styled('img')`
  width: 1rem;
  margin: 0;
  padding: 0;  
`;

interface ConnectOtherWalletsButtonProps {
  isDisabled: boolean;
  onClick: () => void;
}

const walletIcons = Object.values(walletLogos);

function ConnectOtherWalletsButton({
  isDisabled,
  onClick,
}: ConnectOtherWalletsButtonProps): JSX.Element {
  const [currentIconIndex, setCurrentIconIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((index) => (index + 1) % walletIcons.length);
    }, 800);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <SecondaryButton
      isDisabled={isDisabled}
      startIcon={(
        <WalletIcon
          src={walletIcons[currentIconIndex]}
          alt="Wallet Icons"
        />
      )}
      onClick={onClick}
    >
      Connect Wallet
    </SecondaryButton>
  );
}

export default ConnectOtherWalletsButton;
