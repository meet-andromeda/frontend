import React from 'react';
import {
  Button,
  Skeleton,
  styled,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { ContainedButtonProps } from 'components/types';

const BaseButton = styled(Button)`
  width: 100%;
  height: 2.75rem;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  text-transform: none;
`;

const StyledButton = styled(BaseButton)``;

const StyledDisabledButton = styled(BaseButton)`
  background-color: ${(props) => props.theme.palette.character.disable};
  color: ${(props) => props.theme.background.disable};
  border: 0.0625rem solid ${(props) => props.theme.palette.grayscale.fifthLevel};
  border-radius: 0.625rem;

  &.Mui-disabled {
    box-shadow: 0.25rem 0.25rem 0 0 ${(props) => props.theme.palette.grayscale.fifthLevel};
  }
`;

const StyledLoadingButton = styled(LoadingButton)`
  width: 100%;
  height: 2.75rem;
  background-color: ${(props) => props.theme.palette.primary.light};

  & .MuiLoadingButton-loadingIndicator {
    color: ${(props) => props.theme.palette.primary.light};
  }
`;

const ButtonSkeleton = styled(Skeleton)`
  height: 2.75rem;
  width: 100%;
`;

function ContainedButton({
  state = 'active',
  children,
  onClick,
  className,
  isLoading = false,
  startIcon,
  type = 'button',
}: ContainedButtonProps): JSX.Element {
  if (isLoading) {
    return (<ButtonSkeleton />);
  }

  if (state === 'loading') {
    return (
      <StyledLoadingButton type={type} className={className} loading variant="outlined">
        {children}
      </StyledLoadingButton>
    );
  }

  if (state === 'disabled') {
    return (
      <StyledDisabledButton type={type} className={className} color="primary" variant="contained" disabled>
        {children}
      </StyledDisabledButton>
    );
  }

  return (
    <StyledButton type={type} className={className} color="primary" variant="contained" onClick={onClick} startIcon={startIcon} disableRipple>
      {children}
    </StyledButton>
  );
}

export default ContainedButton;
