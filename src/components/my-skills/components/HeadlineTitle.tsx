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
        Полностью увидеть, какие навыки я имею и выполнять для разработки проектов для вас
      </Typography>
    </StyledHeadlineTitle>
  );
};

export default HeadlineTitle;
