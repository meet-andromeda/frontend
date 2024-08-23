import { Divider, styled } from '@mui/material';
import React from 'react';

interface HorizontalDividerProps {
  children?: React.ReactNode;
  textAlign?: 'left' | 'right' | 'center';
  isMainDivider?: boolean;
}

interface StyledDividerProps {
  isMainDivider?: boolean;
}

const styledDividerOptions = {
  shouldForwardProp: (propName: string) => propName !== 'isMainDivider',
};
const StyledDivider = styled(Divider, styledDividerOptions)<StyledDividerProps>`
  width: 100%;
  border-color: ${(props) => (props.isMainDivider
    ? props.theme.palette.primary.main
    : props.theme.palette.grayscale.fourthLevel)};
  &::before, &::after {
    border-color: ${(props) => props.theme.palette.outlines.main};
  }
`;

function HorizontalDivider({
  children,
  textAlign,
  isMainDivider = false,
}: HorizontalDividerProps): JSX.Element {
  if (!children) {
    return (
      <StyledDivider isMainDivider={isMainDivider} />
    );
  }

  if (textAlign) {
    return (
      <StyledDivider textAlign={textAlign}>
        {children}
      </StyledDivider>
    );
  }

  return (
    <StyledDivider>
      {children}
    </StyledDivider>
  );
}

export default HorizontalDivider;
