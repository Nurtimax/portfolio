import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const ProfilePicture = dynamic(() => import('../profile/ProfilePicture'), {
  loading: () => <p>Loading...</p>
});
const ContactPanel = dynamic(() => import('./ContactPanel'), {
  loading: () => <p>Loading...</p>
});

const StyledMainBanner = styled(Grid)(() => ({
  height: '80vh',
  width: '100%'
}));

const MainBanner: FC = () => {
  return (
    <StyledMainBanner container>
      <Grid item md={6} xs={12}>
        <ContactPanel />
      </Grid>
      <Grid item md={6} xs={12}>
        <ProfilePicture />
      </Grid>
    </StyledMainBanner>
  );
};

export default MainBanner;
