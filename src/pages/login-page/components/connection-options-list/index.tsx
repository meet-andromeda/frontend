import React from 'react';
import { Box, styled } from '@mui/material';
import { VerticalSpace } from 'components/spacing';
import ConnectOtherWalletsButton from './connect-other-wallets-button';
import { useWalletConnectionModal } from 'hooks';

const IntroductionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsList = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center; 

  ${(props) => props.theme.breakpoints.down('sm')} {
    width: 100%;
    align-items: center;
  }
`;

function ConnectionOptionsList(): JSX.Element {
  const { openWalletConnectionModal } = useWalletConnectionModal();

  return (
    <>
      <IntroductionContainer>
        <VerticalSpace size="XL" />
        <VerticalSpace size="XL" />
        <VerticalSpace size="S" />
      </IntroductionContainer>
      <VerticalSpace size="M" />
      <ButtonsList>
        <ConnectOtherWalletsButton
          onClick={() => openWalletConnectionModal()}
          isDisabled={false}
        />
      </ButtonsList>
    </>
  );
}

export default ConnectionOptionsList;
