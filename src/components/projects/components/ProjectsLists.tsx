import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import ProjectsItem from './ProjectsItem';

import { PROJECTS } from '@/utils/constants';

interface IProjectsListsProps extends GridProps {
  [key: string]: unknown;
}

const StyledProjectsLists = styled(Grid)(() => ({}));

const ProjectsLists: FC<IProjectsListsProps> = () => {
  return (
    <StyledProjectsLists container spacing={2}>
      {PROJECTS.map((project) => (
        <ProjectsItem key={project.id} {...project} item />
      ))}
    </StyledProjectsLists>
  );
};

export default ProjectsLists;
