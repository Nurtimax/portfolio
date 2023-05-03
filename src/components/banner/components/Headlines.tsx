import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const ProfileName = dynamic(() => import('../../profile/ProfileName'), {
  loading: () => <Loading />
});

const FrontendDeveloperInfo = dynamic(() => import('./FrontendDeveloperInfo'), {
  loading: () => <Loading />
});

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
