import React from 'react';
import {
  styled,
  Select,
  MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { Option } from './types';
import ChevronDownIcon from 'components/icons/chevron-down-icon';
import { Subtitle } from 'components/typographies';

const BaseSelect = styled(Select)`
  background-color: ${(props) => props.theme.background.main};
  width: 400px;
  height: 2.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.125rem 0 ${(props) => props.theme.palette.outlines.light}, 
              0 0 0.063rem 0 ${(props) => props.theme.palette.outlines.light};

  &:focus-within, &:has(.MuiSelect-iconOpen) {  
    border-color: ${(props) => props.theme.palette.primary.light};
    box-shadow: ${(props) => props.theme.shadows.inputShadow};
  };

  & .MuiSelect-icon {
    top: 0rem;
  }
`;

const StyledMenuItem = styled(MenuItem)`
   &.Mui-selected{
    background-color: ${(props) => props.theme.palette.grayscale.secondLevel};
  }
`;

const StyledText = styled('p')`
  color: ${(props) => props.theme.palette.character.light};
  margin: 0;
`;

const StyledChevronDownIcon = styled(ChevronDownIcon)`
  color: ${(props) => props.theme.palette.character.light};
`;

interface SelectorProps {
  isDisable?: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
  options: Option[];
  onChange: (event: SelectChangeEvent<unknown>) => void;
}

function Selector({
  isDisable = false,
  placeholder,
  value = '',
  className,
  options,
  onChange,
}: SelectorProps): JSX.Element {
  return (
    <BaseSelect
      displayEmpty
      className={className}
      value={value}
      disabled={isDisable}
      onChange={onChange}
      IconComponent={StyledChevronDownIcon}
      renderValue={() => {
        if (value.length === 0) {
          return (
            <StyledText>{placeholder}</StyledText>
          );
        }
        const selectedOption = options.find((option) => option.value === value);

        if (selectedOption?.selectedComponent){
          return selectedOption.selectedComponent;
        }
        return (
          <Subtitle
            variant="regular"
            text={options.find((option) => option.value === value)?.label || ''}
          />
        );
      }}
    >
      {
        options.map((option) => (
          <StyledMenuItem
            key={option.value}
            value={option.value}
          >
            {option.component || option.label}
          </StyledMenuItem>
        ))
      }
    </BaseSelect>
  );
}

export default Selector;
