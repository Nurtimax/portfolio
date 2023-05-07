import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { StaticImageData } from 'next/image';

import ProjectPicture from './ProjectPicture';
import NavigateDemo from './NavigateDemo';

import { IProjectsLinks } from '@/types/porjects';

interface IProjectViewProps {
  [key: string]: unknown;
  projectImage: StaticImageData;
  links: IProjectsLinks[];
}

const StyledProjectView = styled(Box)(() => ({}));

const ProjectView: FC<IProjectViewProps> = ({ projectImage, links }) => {
  return (
    <StyledProjectView>
      <ProjectPicture projectImage={projectImage} />
      <NavigateDemo links={links} />
    </StyledProjectView>
  );
};

export default ProjectView;
