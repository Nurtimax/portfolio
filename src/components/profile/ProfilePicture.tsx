import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MyPhoto } from '@/assets';
import Image from 'next/image';
import { Card } from '../UI';

interface ProfilePictureProps {}

const ProfilePicture: FC<ProfilePictureProps> = ({}) => {
  return (
    <StyledProfilePicture>
      <StyledCard>
        <StyledImage src={MyPhoto.src} alt="nurtilek" width="100" height="100" />
      </StyledCard>
    </StyledProfilePicture>
  );
};

export default ProfilePicture;

const StyledProfilePicture = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    height: '100%'
  },
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
    width: '45%',
    height: '40%'
  }
}));
