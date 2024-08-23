import React, { ComponentType } from 'react';
import { Button, styled } from '@mui/material';

interface IconButtonProps {
  className?: string;
  Icon: ComponentType<{ className?: string }>;
  isMainButton?: boolean;
  onClick: () => void;
}

const StyledButton = styled(Button)`
  padding: 0.625rem;
  max-width: 2.25rem;
  min-width: unset;
  border-radius: 50%;
  background-color: ${(props) => props.theme.palette.grayscale.firstLevel};
  color: ${(props) => props.theme.palette.character.main};
  border-color: ${(props) => props.theme.borders.dark};

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.palette.grayscale.thirdLevel};
      border-color: ${(props) => props.theme.borders.dark};
    }
  }
`;

interface ImageProps {
  Component: ComponentType<{ className?: string }>;
  className?: string;
}

function Image({
  Component,
  className = '',
}: ImageProps): JSX.Element {
  return <Component className={className} />;
}

const StyledImage = styled(Image)<{
  isMainButton: boolean;
}>`
  color: ${(props) => (props.isMainButton
    ? props.theme.palette.common.white
    : props.theme.palette.character.main)
};
`;

function IconButton({
  Icon,
  onClick,
  className,
  isMainButton = false,
}: IconButtonProps): JSX.Element {
  return (
    <StyledButton className={className} variant="outlined" onClick={onClick}>
      <StyledImage Component={Icon} isMainButton={isMainButton} />
    </StyledButton>
  );
}

export default IconButton;
