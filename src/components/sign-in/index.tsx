import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainSignInContent from './components/MainSignInContent';

interface IMainSignInProps {
  [key: string]: unknown;
}

const StyledMainSignIn = styled(Box)(() => ({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const MainSignIn: FC<IMainSignInProps> = () => {
  return (
    <StyledMainSignIn>
      <MainSignInContent />
    </StyledMainSignIn>
  );
};

export default MainSignIn;
