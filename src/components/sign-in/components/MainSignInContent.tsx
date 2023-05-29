import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Headlines from './Headlines';
import SignInForms from './SignInForms';
import SignInSocial from './SignInSocial';
import SignInDivider from './SignInDivider';

interface IMainSignInContentProps {
  [key: string]: unknown;
}

const StyledMainSignInContent = styled(Box)(({ theme }) => ({
  width: '600px',
  background: theme.palette.primary.dark,
  padding: '2rem 1rem',
  borderRadius: '.5rem',
  boxShadow: 'rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px'
}));

const MainSignInContent: FC<IMainSignInContentProps> = (props) => {
  return (
    <StyledMainSignInContent {...props}>
      <Headlines />
      <SignInForms />
      <SignInDivider />
      <SignInSocial />
    </StyledMainSignInContent>
  );
};

export default MainSignInContent;
