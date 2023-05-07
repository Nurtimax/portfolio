import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface IHeadTitleProps {
  [key: string]: unknown;
}

const StyledHeadTitle = styled(Box)(() => ({
  padding: '1rem 0'
}));

const HeadTitle: FC<IHeadTitleProps> = () => {
  return (
    <StyledHeadTitle>
      <Typography variant="h4">Projects</Typography>
      <Typography variant="subtitle1">Последних работ</Typography>
    </StyledHeadTitle>
  );
};

export default HeadTitle;
