import React from 'react';
import {
  styled,
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

const Container = styled(Box)`
  max-width: 42rem;
  margin: auto;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

interface WiderContainerProps {
  children?: React.ReactNode;
}

function WiderContainer({
  children = <Outlet />,
}: WiderContainerProps): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default WiderContainer;
