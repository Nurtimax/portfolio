import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';
import { MainAbout } from '@/components';

interface IAboutProps {}

const About: FC<IAboutProps> = ({}) => {
  return (
    <StyledAbout>
      <Element name="about" id="about" />
      <MainAbout />
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled(Box)(() => ({
  padding: '2rem 0'
}));
