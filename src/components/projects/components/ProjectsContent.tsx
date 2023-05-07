import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ProjectsLists from './ProjectsLists';
import HeadTitle from './HeadTitle';

interface IProjectsContentProps {
  [key: string]: unknown;
}

const StyledProjectsContent = styled(Box)(() => ({}));

const ProjectsContent: FC<IProjectsContentProps> = () => {
  return (
    <StyledProjectsContent>
      <HeadTitle />
      <ProjectsLists />
    </StyledProjectsContent>
  );
};

export default ProjectsContent;
