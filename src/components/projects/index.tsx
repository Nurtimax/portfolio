import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ProjectsContent from './components/ProjectsContent';

const StyledProjects = styled(Box)(() => ({}));

const Porjects: FC = () => {
  return (
    <StyledProjects>
      <ProjectsContent />
    </StyledProjects>
  );
};

export default Porjects;
