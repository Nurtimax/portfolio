import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadlineTitleProps {
  [key: string]: unknown;
}

const StyledHeadlineTitle = styled(Box)(() => ({}));

const HeadlineTitle: FC<IHeadlineTitleProps> = () => {
  return (
    <StyledHeadlineTitle>
      <Typography variant="h4" component="h1">
        My Skills
      </Typography>
      <Typography variant="subtitle1" component="h3">
        Fully see what skills I have and perform to develop projects for you
      </Typography>
    </StyledHeadlineTitle>
  );
};

export default HeadlineTitle;
