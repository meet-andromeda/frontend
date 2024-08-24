import React from 'react';
import { Button, styled } from '@mui/material';

interface SecondaryButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
  startIcon?: React.ReactNode;
  isDisabled?: boolean;
}

const StyledButton = styled(Button)`
  color: #3D4E6A;
  border-color: #3D4E6A;
`;

function SecondaryButton({
  children,
  onClick,
  className,
  startIcon,
  isDisabled = false,
}: SecondaryButtonProps): JSX.Element {
  return (
    <StyledButton disabled={isDisabled} className={className} variant="outlined" onClick={onClick} startIcon={startIcon} disableRipple>
      {children}
    </StyledButton>
  );
}

export default SecondaryButton;
