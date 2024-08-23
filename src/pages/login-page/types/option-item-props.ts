interface OptionItemProps {
  name: string;
  title: string;
  logo: string;
  description?: string;
  isSelected?: boolean;
  estimatedTimeForSetup?: string;
  onClick: () => void;
}

export default OptionItemProps;
