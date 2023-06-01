import { FC } from 'react';
import { Box, styled } from '@mui/material';

import FrontendDeveloperInfo from './FrontendDeveloperInfo';

import ProfileName from '@/components/profile/ProfileName';

const StyledHeadlines = styled(Box)(() => ({
  display: 'grid',
  justifyItems: 'flex-start',
  alignItems: 'center'
}));

const Headlines: FC = () => {
  return (
    <StyledHeadlines>
      <ProfileName />
      <FrontendDeveloperInfo />
    </StyledHeadlines>
  );
};

export default Headlines;
