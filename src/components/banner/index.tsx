import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '../loading';

const ProfilePicture = dynamic(() => import('../profile/ProfilePicture'), {
  loading: () => <Loading />
});
const ContactPanel = dynamic(() => import('./components/ContactPanel'), {
  loading: () => <Loading />
});

const StyledMainBanner = styled(Grid)(() => ({
  height: '80vh',
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
