import React, { ForwardedRef, forwardRef } from 'react';
import {
  css,
  InputAdornment,
  styled,
  TextField,
} from '@mui/material';
import { InputProps } from 'components/types';

const BaseTextField = styled(TextField)<{ type: string }>`
  background-color: ${(props) => props.theme.background.main};
  width: 400px;

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => props.theme.palette.primary.light};
  }

  & .MuiOutlinedInput-root {
    height: 2.75rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.125rem 0.125rem 0 ${(props) => props.theme.palette.outlines.light}, 
                0 0 0.063rem 0 ${(props) => props.theme.palette.outlines.light};
    border: 0.063rem
    
    & fieldset {
      border-color: ${(props) => props.theme.borders.main};
    }

    &.Mui-focused fieldset {
      border-color: ${(props) => props.theme.background.success};
      box-shadow: ${(props) => props.theme.background.success}};
    }

  ${(props) => props.type === 'number' && css`
    & input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    & input {
      -moz-appearance: textfield;
    }
  `}
`;

const Adornment = styled(InputAdornment)`
  &.MuiInputAdornment-root .MuiTypography-root {
    color: rgba(0, 0, 0, 1);
  }
`;

const Input = forwardRef((
  {
    id,
    name,
    isDisable = false,
    type = 'text',
    placeholder = '',
    value,
    className,
    onChange,
    defaultValue,
    onBlur,
    prefix,
    inputMode,
    inputRef,
  }: InputProps,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  const inputProps = {
    inputProps: type === 'email'
      ? {
        autoCapitalize: 'none',
        autoCorrect: 'off',
      } : undefined,
    startAdornment: prefix && (
      <Adornment position="start">
        {prefix}
      </Adornment>
    ),
  };

  return (
    <BaseTextField
      id={id}
      ref={ref}
      name={name}
      className={className}
      placeholder={placeholder}
      value={value}
      type={type}
      inputMode={inputMode}
      disabled={isDisable}
      onChange={onChange}
      defaultValue={defaultValue}
      onBlur={onBlur}
      InputProps={inputProps}
      inputRef={inputRef}
    />
  );
});

Input.displayName = 'Input';

export default Input;
