import {
  Card, ImageListItem, styled, useTheme,
} from '@mui/material';
import React, { ComponentType, useMemo } from 'react';
import { HorizontalSpace } from 'components/spacing';
import { Body } from 'components/typographies';

interface LoginCardProps {
  isDisabled: boolean;
  onClick: () => void;
  className?: string;
  Icon?: ComponentType<{ className?: string }>;
  iconUrl?: string;
  iconAlt?: string;
  text: string;
}

interface ActionCardProps {
  isDisabled: boolean;
}

const Logo = styled(ImageListItem)<ActionCardProps>`
  width: 1.25rem;
  height: 1.25rem;

  ${(props) => props.isDisabled && `
    opacity: 0.2;
  `}
`;

const LoginCardContainer = styled(Card)<ActionCardProps>`
  height: 2.75rem;
  padding: 0.94rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: 0.0625rem solid ${(props) => props.theme.borders.main};

  &:hover {
    background-color: ${(props) => props.theme.background.hover};
  }

  ${(props) => props.isDisabled && `
    background-color: ${props.theme.palette.character.disable};
    cursor: not-allowed;

    @media (hover: hover) and (pointer: fine) {
      &:hover {
        background-color: ${props.theme.palette.character.disable};
      }
    }
  `}
`;

const IconContainer = styled('div')<ActionCardProps>`
  width: 1.25rem;
  height: 1.25rem;

  ${(props) => props.isDisabled && `
    opacity: 0.2;
  `}
`;

function LoginCard({
  isDisabled,
  onClick,
  className,
  Icon,
  iconUrl,
  iconAlt,
  text,
}: LoginCardProps): JSX.Element {
  const theme = useTheme();
  const clickHandler = useMemo(() => {
    if (!isDisabled) {
      return onClick;
    }
    return () => {};
  }, [isDisabled, onClick]);

  return (
    <LoginCardContainer
      isDisabled={isDisabled}
      onClick={clickHandler}
      className={className}
    >
      <HorizontalSpace size="XL" />
      <HorizontalSpace size="S" />
      { Icon && (
      <IconContainer isDisabled={isDisabled}>
        <Icon />
      </IconContainer>
      )}
      { !Icon && iconUrl && (
      <Logo isDisabled={isDisabled}>
        <img src={iconUrl} alt={iconAlt} />
      </Logo>
      )}
      <HorizontalSpace size="S" />
      <Body
        text={text}
        variant="regular"
        color={
        isDisabled
          ? theme.background.disable
          : theme.palette.character.main
        }
      />
    </LoginCardContainer>
  );
}

export default LoginCard;
