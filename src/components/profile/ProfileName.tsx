import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

const StyledProfileName = styled(Box)(() => ({
  alignSelf: 'flex-end',
  '& h2': {
    color: 'red'
  }
}));

const ProfileName: FC = () => {
  return (
    <StyledProfileName>
      <Typography component="h4" variant="h6">
        I'm
      </Typography>
      <Typography component="h2" variant="h4">
        Nurtilek Maksatbek
      </Typography>
    </StyledProfileName>
  );
};

export default ProfileName;
