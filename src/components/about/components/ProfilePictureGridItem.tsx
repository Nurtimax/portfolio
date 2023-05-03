import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import ProfilePicture from '../../profile/ProfilePicture';

const StyledProfilePictureGridItem = styled(Grid)(() => ({
  display: 'flex',
  alignItems: 'center'
}));

const ProfilePictureGridItem: FC = () => {
  return (
    <StyledProfilePictureGridItem item md={6} xs={12}>
      <ProfilePicture />
    </StyledProfilePictureGridItem>
  );
};

export default ProfilePictureGridItem;
