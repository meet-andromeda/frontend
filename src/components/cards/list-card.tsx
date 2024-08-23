import { Card, styled } from '@mui/material';
import React from 'react';

interface ListCardProps {
  children: React.ReactNode;
  className?: string;
  isClickable?: boolean;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const StyledCard = styled(Card)`
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  box-shadow: none;
  justify-content: space-between;
  background-color:  ${(props) => props.theme.background.main};

  ${(props) => props.onClick
    && `
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        cursor: pointer;
        background-color: ${props.theme.background.hover}; 
      }
      &.parent-hover-disabled:hover {
        background-color: ${props.theme.background.main};
      }
    }
  `}
`;

function ListCard({
  children,
  className,
  isClickable = true,
  onClick,
}: ListCardProps): JSX.Element {
  return (
    <StyledCard className={className} onClick={isClickable ? onClick : undefined}>
      {children}
    </StyledCard>
  );
}

export default ListCard;
