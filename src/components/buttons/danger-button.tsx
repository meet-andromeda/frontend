import React from 'react';
import { Button, styled } from '@mui/material';

interface DangerButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled(Button)`
  width: 100%;
  height: 2.75rem;
  font-weight: 400;
  font-size: 1rem;
  text-transform: none;
  color: ${(props) => props.theme.borders.danger};
  border-color: ${(props) => props.theme.borders.danger};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.background.hover};
      border-color: ${(props) => props.theme.borders.danger};
    }
  }
`;

function DangerButton({
  children,
  onClick,
  className,
}: DangerButtonProps): JSX.Element {
  return (
    <StyledButton className={className} variant="outlined" onClick={onClick}>
      {children}
    </StyledButton>
  );
}

export default DangerButton;
