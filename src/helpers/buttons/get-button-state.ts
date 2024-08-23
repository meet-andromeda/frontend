import { ContainedButtonProps } from 'components/types';

interface GetButtonStateProps {
  isLoading: boolean;
  errorMessage: string;
}

function getButtonState({
  isLoading,
  errorMessage,
}: GetButtonStateProps): ContainedButtonProps['state'] {
  if (isLoading) {
    return 'loading';
  }

  return errorMessage ? 'disabled' : 'active';
}

export default getButtonState;
