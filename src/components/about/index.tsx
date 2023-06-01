import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import ProfilePicture from '../profile/ProfilePicture';

import AboutHeadlines from './components/AboutHeadlines';

const StyledMainAbout = styled(Grid)(() => ({
  padding: '2.5rem 0'
}));

const MainAbout: FC = () => {
  return (
    <StyledMainAbout container>
      <ProfilePicture sx={{ display: { xs: 'none', md: 'flex' } }} />
      <AboutHeadlines />
    </StyledMainAbout>
  );
};

export default MainAbout;
