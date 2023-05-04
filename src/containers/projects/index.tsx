import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainPorjects } from '@/components';
import { PAGES } from '@/utils/constants/pages';

const StyledProjects = styled(Box)(() => ({
  height: '80vh',
  background: '#292929'
}));

const Projects: FC = () => {
  return (
    <StyledProjects>
      <Element name={PAGES.PROJECTS} id={PAGES.PROJECTS} />
      <Container>
        <MainPorjects />
      </Container>
    </StyledProjects>
  );
};

export default Projects;
