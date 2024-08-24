import React from 'react';
import { styled } from '@mui/material';
import Icon from '../icon';

const Svg = styled(Icon)`
  width: 2.75rem;
  height: 2.75rem;
`;

function ChevronDownIcon(): JSX.Element {
  return (
    <Svg viewBox="0 0 44 44" fill="none">
      <path d="M17 20L22 25L27 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export default ChevronDownIcon;
