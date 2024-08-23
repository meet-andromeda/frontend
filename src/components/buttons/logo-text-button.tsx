import {
  Box,
  Button,
  Skeleton,
  styled,
} from '@mui/material';

interface LogoTextButtonProps {
  state?: 'active' | 'disabled' | 'loading';
  className?: string;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  onClick: () => void;
  isLoading?: boolean;
}

const BaseButton = styled(Button)`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  text-transform: none;
  background-color: transparent;
`;

const StyledButton = styled(BaseButton)`
  color: ${(props) => props.theme.palette.primary.main};
`;

const StyledLoadingButton = styled(BaseButton)`
  color: ${(props) => props.theme.palette.primary.light};
`;

const StyledDisabledButton = styled(BaseButton)`
  color: ${(props) => props.theme.background.disable};
  cursor: not-allowed;
`;

const TextButtonSkeleton = styled(Skeleton)`
  width: 100%;
`;

const ButtonContainer = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RightSideButtonContainer = styled(Box)`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
`;

function LogoTextButton({
  state,
  children,
  onClick,
  className,
  rightIcon,
  isLoading = false,
}: LogoTextButtonProps): JSX.Element {
  if (isLoading) {
    return (<TextButtonSkeleton />);
  }

  if (state === 'loading') {
    return (
      <ButtonContainer>
        <StyledLoadingButton className={className}>
          {children}
        </StyledLoadingButton>
        <RightSideButtonContainer>
          {rightIcon}
        </RightSideButtonContainer>
      </ButtonContainer>
    );
  }

  if (state === 'disabled') {
    return (
      <ButtonContainer>
        <StyledDisabledButton className={className}>
          {children}
        </StyledDisabledButton>
        <RightSideButtonContainer>
          {rightIcon}
        </RightSideButtonContainer>
      </ButtonContainer>
    );
  }

  return (
    <ButtonContainer
      onClick={onClick}
    >
      <StyledButton className={className}>
        {children}
      </StyledButton>
      <RightSideButtonContainer>
        {rightIcon}
      </RightSideButtonContainer>
    </ButtonContainer>
  );
}

export default LogoTextButton;
