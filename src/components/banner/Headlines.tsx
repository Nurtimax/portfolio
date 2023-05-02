import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const ProfileName = dynamic(() => import('../profile/ProfileName'), {
  loading: () => <p>Loading...</p>
});

const FrontendDeveloperInfo = dynamic(() => import('./FrontendDeveloperInfo'), {
  loading: () => <p>Loading...</p>
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
