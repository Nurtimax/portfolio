import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import HeadlineTitle from './HeadlineTitle';
import HeadlineNavigate from './HeadlineNavigate';

interface IHeaderlineProps extends GridProps {
  [key: string]: unknown;
}

const StyledHeaderline = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gap: '1rem',
  '& h3': {
    color: theme.palette.secondary.light
  },
  [theme.breakpoints.down('md')]: {
    padding: '0 0 2rem'
  }
}));

const Headerline: FC<IHeaderlineProps> = () => {
  return (
    <StyledHeaderline item md={4.5} xs={12}>
      <HeadlineTitle />
      <HeadlineNavigate />
    </StyledHeaderline>
  );
};

export default Headerline;
