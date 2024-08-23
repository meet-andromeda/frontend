import React from 'react';
import { styled, Box } from '@mui/material';
import { sizes } from './constants';
import { Size } from './types';

const BaseContainer = styled(Box)`
  padding: 0;
  margin: 0;
`;

interface HorizontalSpaceProps {
  size: Size;
}

function HorizontalSpace({
  size,
}: HorizontalSpaceProps): JSX.Element {
  return (
    <BaseContainer sx={{ width: sizes[size], minWidth: sizes[size] }} />
  );
}

export default HorizontalSpace;
