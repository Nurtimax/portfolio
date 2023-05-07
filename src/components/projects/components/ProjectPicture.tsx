import { FC } from 'react';
import { Box, styled } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

interface IProjectPictureProps {
  [key: string]: unknown;
  projectImage: StaticImageData;
}

const StyledProjectPicture = styled(Box)(() => ({
  border: '1px solid #cdcdcd',
  '& img': {
    width: '100%',
    height: '100%'
  }
}));

const ProjectPicture: FC<IProjectPictureProps> = ({ projectImage }) => {
  return (
    <StyledProjectPicture>
      <Image src={projectImage.src} alt="project" width={100} height={100} />
    </StyledProjectPicture>
  );
};

export default ProjectPicture;
