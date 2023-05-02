import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainPorjects } from '@/components';

const StyledProjects = styled(Box)(() => ({
  height: '80vh'
}));

const Projects: FC = () => {
  return (
    <StyledProjects>
      <Element name="projects" id="projects">
        <MainPorjects />
      </Element>
    </StyledProjects>
  );
};

export default Projects;
