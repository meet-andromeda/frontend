interface ContainedButtonProps {
  state?: 'active' | 'disabled' | 'loading';
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  isLoading?: boolean;
  startIcon?: React.ReactNode;
  type?: 'button' | 'reset' | 'submit';
}

export default ContainedButtonProps;
