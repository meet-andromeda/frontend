import {
  Button,
  Skeleton,
  styled,
} from '@mui/material';

interface TextButtonProps {
  state?: 'active' | 'disabled' | 'loading';
  className?: string;
  children: React.ReactNode;
  onClick: () => void;
  isLoading?: boolean;
}

const BaseButton = styled(Button)`
  margin: 0;
  padding: 0;
  width: 100%;
  font-weight: 400;
  font-style: normal;
  font-size: 0.875rem;
  text-transform: none;
  background-color: transparent;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: transparent;
    }
  }
`;

const StyledButton = styled(BaseButton)`
  color: ${(props) => props.theme.palette.primary.main};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.palette.primary.light};
    }
  }
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

function TextButton({
  state,
  children,
  onClick,
  className,
  isLoading = false,
}: TextButtonProps): JSX.Element {
  if (isLoading) {
    return (<TextButtonSkeleton />);
  }

  if (state === 'loading') {
    return (
      <StyledLoadingButton className={className}>
        {children}
      </StyledLoadingButton>
    );
  }

  if (state === 'disabled') {
    return (
      <StyledDisabledButton className={className}>
        {children}
      </StyledDisabledButton>
    );
  }

  return (
    <StyledButton onClick={onClick} className={className}>
      {children}
    </StyledButton>
  );
}

export default TextButton;
