import { RefObject } from 'react';
import { RefCallBack } from 'react-hook-form';

interface InputProps {
  id?: string;
  name?: string;
  isDisable?: boolean;
  type?: 'number' | 'text' | 'tel' | 'email';
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  onBlur?: () => void;
  prefix?: string;
  inputRef?: RefObject<HTMLInputElement> | RefCallBack;
  inputMode?: 'none' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
}

export default InputProps;
