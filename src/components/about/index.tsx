import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import ProfilePicture from '../profile/ProfilePicture';

import AboutHeadlines from './components/AboutHeadlines';

const StyledMainAbout = styled(Grid)(() => ({}));

const MainAbout: FC = () => {
  return (
    <StyledMainAbout container>
      <ProfilePicture sx={{ display: { xs: 'none', md: 'flex' } }} />
      <AboutHeadlines />
    </StyledMainAbout>
  );
};

export default MainAbout;
