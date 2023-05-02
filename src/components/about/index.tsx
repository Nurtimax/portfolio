import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import ProfilePictureGridItem from './ProfilePictureGridItem';
import AboutHeadlines from './AboutHeadlines';

const StyledMainAbout = styled(Grid)(() => ({
  height: '100%'
}));

const MainAbout: FC = () => {
  return (
    <StyledMainAbout container>
      <ProfilePictureGridItem />
      <AboutHeadlines />
    </StyledMainAbout>
  );
};

export default MainAbout;
