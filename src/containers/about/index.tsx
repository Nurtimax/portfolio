import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainAbout } from '@/components';
import { PAGES } from '@/utils/constants/pages';

const StyledAbout = styled(Box)(() => ({
  padding: '2rem 0'
}));

const About: FC = () => {
  return (
    <StyledAbout>
      <Element name={PAGES.ABOUT} id={PAGES.ABOUT} />
      <Container>
        <MainAbout />
      </Container>
    </StyledAbout>
  );
};

export default About;
