import {
  styled,
  Container,
} from '@mui/material';
import { sizes } from './constants';
import { Size } from './types';

const BaseContainer = styled(Container)`
  width: 100%;
  padding: 0;
  margin: 0;
`;

interface VerticalSpaceProps {
  size: Size;
  className?: string;
}

function VerticalSpace({
  size,
  className,
}: VerticalSpaceProps): JSX.Element {
  return (
    <BaseContainer maxWidth={false} sx={{ height: sizes[size] }} className={className} />
  );
}

export default VerticalSpace;
