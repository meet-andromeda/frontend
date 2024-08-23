import { Card, styled } from '@mui/material';
import React from 'react';

interface ActionCardProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const StyledCard = styled(Card)`
  padding: 0.94rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0.0625rem solid ${(props) => props.theme.borders.main};

  &:hover {
    background-color: ${(props) => props.theme.background.hover};
  }
`;

function ActionCard({
  children,
  onClick,
  className,
}: ActionCardProps): JSX.Element {
  return (
    <StyledCard className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
}

export default ActionCard;
