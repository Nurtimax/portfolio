import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IMainSignInProps {
  [key: string]: unknown;
}

const StyledMainSignIn = styled(Box)(() => ({}));

const MainSignIn: FC<IMainSignInProps> = () => {
  return <StyledMainSignIn>MainSignIn</StyledMainSignIn>;
};

export default MainSignIn;
