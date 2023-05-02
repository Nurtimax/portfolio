import { FC } from 'react';
import { Typography, styled } from '@mui/material';

const StyledAboutMe = styled(Typography)(() => ({
  alignSelf: 'flex-end'
}));

const AboutMe: FC = () => {
  return <StyledAboutMe variant="h4">About Me</StyledAboutMe>;
};

export default AboutMe;
