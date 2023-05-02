import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainAbout } from '@/components';

const StyledAbout = styled(Box)(() => ({
  padding: '2rem 0'
}));

const About: FC = () => {
  return (
    <StyledAbout>
      <Element name="about" id="about" />
      <MainAbout />
    </StyledAbout>
  );
};

export default About;
