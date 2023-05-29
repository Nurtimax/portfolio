import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadlinesProps {
  [key: string]: unknown;
}

const StyledHeadlines = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center'
}));

const Headlines: FC<IHeadlinesProps> = () => {
  return (
    <StyledHeadlines>
      <Typography variant="h5">Войти</Typography>
    </StyledHeadlines>
  );
};

export default Headlines;
