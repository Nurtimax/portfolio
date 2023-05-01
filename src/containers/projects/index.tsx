import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';
import { MainPorjects } from '@/components';

interface IProjectsProps {}

const Projects: FC<IProjectsProps> = ({}) => {
  return (
    <StyledProjects>
      <Element name="projects" id='projects'>
        <MainPorjects />
      </Element>
    </StyledProjects>
  );
};

export default Projects;

const StyledProjects = styled(Box)(() => ({
  height: '80vh'
}));
