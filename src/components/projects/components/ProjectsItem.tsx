import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';
import { StaticImageData } from 'next/image';

import Headlines from './Headlines';
import ProjectView from './ProjectView';

import { IProjectsLinks } from '@/types/porjects';

interface IProjectsItemProps extends GridProps {
  [key: string]: unknown;
  title: string;
  description: string[];
  projectImage: StaticImageData;
  links: IProjectsLinks[];
}

const StyledProjectsItem = styled(Grid)(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  padding: '1rem 0',
  gap: '1rem'
}));

const ProjectsItem: FC<IProjectsItemProps> = ({
  title,
  description,
  projectImage,
  links,
  ...rest
}) => {
  return (
    <StyledProjectsItem {...rest}>
      <ProjectView projectImage={projectImage} links={links} />
      <Headlines title={title} description={description} />
    </StyledProjectsItem>
  );
};

export default ProjectsItem;
