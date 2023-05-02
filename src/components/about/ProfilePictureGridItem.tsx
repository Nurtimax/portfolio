import { FC } from 'react';
import { Grid, styled } from '@mui/material';
import ProfilePicture from '../profile/ProfilePicture';

interface ProfilePictureGridItemProps {}

const ProfilePictureGridItem: FC<ProfilePictureGridItemProps> = ({}) => {
  return (
    <StyledProfilePictureGridItem item md={6} xs={12}>
      <ProfilePicture />
    </StyledProfilePictureGridItem>
  );
};

export default ProfilePictureGridItem;

const StyledProfilePictureGridItem = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center'
}));
