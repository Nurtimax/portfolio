import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadlinesProps {
  [key: string]: unknown;
}

const StyledHeadlines = styled(Box)(() => ({
  display: 'grid',
  justifyContent: 'center'
}));

const Headlines: FC<IHeadlinesProps> = () => {
  return (
    <StyledHeadlines>
      <Typography variant="h4">Contact Me</Typography>
    </StyledHeadlines>
  );
};

export default Headlines;
