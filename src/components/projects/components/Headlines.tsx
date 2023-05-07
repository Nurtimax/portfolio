import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

import HeadDescription from './HeadDescription';

interface IHeadlinesProps {
  [key: string]: unknown;
  title: string;
  description: string[];
}

const StyledHeadlines = styled(Box)(() => ({
  '& h1': {
    color: 'red'
  }
}));

const Headlines: FC<IHeadlinesProps> = ({ title, description }) => {
  return (
    <StyledHeadlines>
      <Typography variant="h6" component="h1">
        {title}
      </Typography>
      <HeadDescription description={description} />
    </StyledHeadlines>
  );
};

export default Headlines;
