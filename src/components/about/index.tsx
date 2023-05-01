import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IMainAboutProps {}

const MainAbout: FC<IMainAboutProps> = ({}) => {
  return <StyledMainAbout>MainAbout</StyledMainAbout>;
};

export default MainAbout;

const StyledMainAbout = styled(Box)(() => ({}));
