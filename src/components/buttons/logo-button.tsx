import React from 'react';
import { Box, Button, styled } from '@mui/material';
import { Subheading } from 'components/typographies';
import { sizes } from './constants';

interface LogoButtonProps {
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textButton?: string;
  type?: 'oneLine' | 'doubleLine';
  onClick: () => void;
}

const StyledButton = styled(Button)`
  width: 100%;
  height: 3.625rem;
  font-weight: 400;
  font-size: 1rem;
  text-transform: none;
  background-color: ${(props) => props.theme.background.main};
  border-color: ${(props) => props.theme.borders.main};
  color: ${(props) => props.theme.palette.grayscale.fourthLevel};
  padding: 0.625rem 0.75rem;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.background.hover};
      border-color: ${(props) => props.theme.borders.main};
    }
  }
`;

const ButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftSideButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RightSideButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

function LogoButton({
  onClick,
  className,
  leftIcon,
  rightIcon,
  textButton = '',
  type = 'oneLine',
}: LogoButtonProps): JSX.Element {
  const buttonContent = (
    <ButtonContainer>
      <LeftSideButtonContainer>
        {leftIcon}
        <Subheading text={textButton} variant="regular" />
      </LeftSideButtonContainer>
      <RightSideButtonContainer>
        {rightIcon}
      </RightSideButtonContainer>
    </ButtonContainer>
  );

  return (
    <StyledButton className={className} variant="outlined" onClick={onClick} sx={{ height: sizes[type] }}>
      {buttonContent}
    </StyledButton>
  );
}

export default LogoButton;
