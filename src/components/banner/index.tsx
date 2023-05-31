import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import ProfilePicture from '../profile/ProfilePicture';

import ContactPanel from './components/ContactPanel';

const StyledMainBanner = styled(Grid)(() => ({
  height: '90vh',
  width: '100%'
}));

const MainBanner: FC = () => {
  return (
    <StyledMainBanner container>
      <ContactPanel />
      <ProfilePicture />
    </StyledMainBanner>
  );
};

export default MainBanner;
