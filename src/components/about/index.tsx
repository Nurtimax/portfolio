import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import ProfilePictureGridItem from './ProfilePictureGridItem';
import AboutHeadlines from './AboutHeadlines';

interface IMainAboutProps {}

const MainAbout: FC<IMainAboutProps> = ({}) => {
  return (
    <StyledMainAbout container>
      <ProfilePictureGridItem />
      <AboutHeadlines />
    </StyledMainAbout>
  );
};

export default MainAbout;

const StyledMainAbout = styled(Grid)(() => ({
  height: '100%'
}));
