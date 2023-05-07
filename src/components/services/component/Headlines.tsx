import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadlinesProps {
  [key: string]: unknown;
}

const StyledHeadlines = styled(Box)(() => ({
  height: '15%'
}));

const Headlines: FC<IHeadlinesProps> = () => {
  return (
    <StyledHeadlines>
      <Typography variant="h4">Services</Typography>
      <Typography variant="subtitle1">Что я предлагаю</Typography>
    </StyledHeadlines>
  );
};

export default Headlines;
