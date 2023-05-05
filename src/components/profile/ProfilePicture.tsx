import { FC, ReactNode } from 'react';
import { Grid, GridProps, styled } from '@mui/material';
import Image from 'next/image';

import { Card } from '../UI';

import { MyPhoto } from '@/assets';

interface IProfilePicture extends GridProps {
  children?: ReactNode;
}

const StyledProfilePicture = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledImage = styled(Image)(() => ({
  width: '100%',
  height: '100%',
  mixBlendMode: 'darken'
}));

const StyledCard = styled(Card)(({ theme }) => ({
  width: '70%',
  height: '60%',
  background: '#eaf6fe',
  [theme.breakpoints.down('sm')]: {
    width: '55% !important',
    height: '80% !important'
  },
  [theme.breakpoints.down('md')]: {
    width: '45%',
    height: '70%'
  }
}));

const ProfilePicture: FC<IProfilePicture> = ({ ...props }) => {
  return (
    <StyledProfilePicture item md={6} xs={12} {...props}>
      <StyledCard>
        <StyledImage src={MyPhoto.src} alt="nurtilek" width="100" height="100" />
      </StyledCard>
    </StyledProfilePicture>
  );
};

export default ProfilePicture;
