import { FC } from 'react';
import { Box, Grid, styled } from '@mui/material';
import ContactPanel from './ContactPanel';
import ProfilePicture from '../profile/ProfilePicture';

interface IBannerProps {}

const MainBanner: FC<IBannerProps> = ({}) => {
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

const StyledMainBanner = styled(Grid)(() => ({
  height: '80vh',
  width: '100%'
}));
