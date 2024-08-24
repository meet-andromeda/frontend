import React from 'react';
import {
  styled,
  Box,
} from '@mui/material';
import { Outlet } from 'react-router-dom';

const Container = styled(Box)`
  max-width: 24rem;
  margin: auto;

  ${(props) => props.theme.breakpoints.down('lg')} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

interface NarrowContainerProps {
  children?: React.ReactNode;
}

function NarrowContainer({
  children = <Outlet />,
}: NarrowContainerProps): JSX.Element {
  return (
    <Container>
      {children}
    </Container>
  );
}

export default NarrowContainer;
