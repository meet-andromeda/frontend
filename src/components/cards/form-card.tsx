import { Card, styled } from '@mui/material';
import React from 'react';

interface FormCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const StyledCard = styled(Card)`
  width: 100%;
  padding: 1.25rem;
  border: 0.0625rem solid ${(props) => props.theme.borders.main};
`;

function FormCard({
  children,
  className,
  onClick,
}: FormCardProps): JSX.Element {
  return (
    <StyledCard className={className} onClick={onClick}>
      {children}
    </StyledCard>
  );
}

export default FormCard;
