import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';
import ProfileName from './ProfileName';
import FrontendDeveloperInfo from './FrontendDeveloperInfo';

interface HeadlinesProps {}

const Headlines: FC<HeadlinesProps> = ({}) => {
  return (
    <StyledHeadlines>
      <ProfileName />
      <FrontendDeveloperInfo />
    </StyledHeadlines>
  );
};

export default Headlines;

const StyledHeadlines = styled(Box)(({ theme }) => ({
  display: 'grid',
  justifyItems: 'flex-start',
  alignItems: 'center'
}));
