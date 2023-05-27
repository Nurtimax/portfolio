import { FC } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { ImUser } from 'react-icons/im';

import CustomMenuList from '@/components/menu-list';
import { SIGNIN_LISTS } from '@/utils/constants/sign-in';

interface IProfileStatusProps {
  [key: string]: unknown;
}

const StyledProfileStatus = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '45px',
  height: '45px',
  borderRadius: '50%',
  background: theme.palette.secondary.main,
  cursor: 'pointer'
}));

const ProfileStatus: FC<IProfileStatusProps> = () => {
  return (
    <StyledProfileStatus>
      <CustomMenuList
        lists={SIGNIN_LISTS}
        isMobile={false}
        isLink
        Button={
          <IconButton sx={{ color: 'red !important' }}>
            <ImUser />
          </IconButton>
        }
      />
    </StyledProfileStatus>
  );
};

export default ProfileStatus;
