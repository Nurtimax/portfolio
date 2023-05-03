import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import Image from 'next/image';

import { Card } from '../UI';

import { MyPhoto } from '@/assets';

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
  [theme.breakpoints.down('md')]: {
    width: '60%',
    height: '85%'
  }
}));

const ProfilePicture: FC = () => {
  return (
    <StyledProfilePicture item md={6} xs={12}>
      <StyledCard>
        <StyledImage src={MyPhoto.src} alt="nurtilek" width="100" height="100" />
      </StyledCard>
    </StyledProfilePicture>
  );
};

export default ProfilePicture;
