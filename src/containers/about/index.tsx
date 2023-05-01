import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';
import { MainAbout } from '@/components';

interface IAboutProps {}

const About: FC<IAboutProps> = ({}) => {
  return (
    <StyledAbout>
      <Element name="about" id='about'>
        <MainAbout />
      </Element>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled(Box)(() => ({
  height: '80vh'
}));
