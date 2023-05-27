import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IAnimatedProps {
  [key: string]: unknown;
}

const StyledAnimated = styled(Box)(() => ({}));

const Animated: FC<IAnimatedProps> = () => {
  return <StyledAnimated>Animated</StyledAnimated>;
};

export default Animated;
