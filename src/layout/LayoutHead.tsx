import { FC } from 'react';
import { Box, CssBaseline, Toolbar, styled } from '@mui/material';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const Header = dynamic(() => import('./header'), {
  loading: () => <Loading />
});
const Banner = dynamic(() => import('./banner'), {
  loading: () => <Loading />
});

const StyledLayoutHead = styled(Box)(() => ({}));

const LayoutHead: FC = () => {
  return (
    <StyledLayoutHead>
      <CssBaseline />
      <Element name="/" id="/" />
      <Header />
      <Toolbar />
      <Banner />
    </StyledLayoutHead>
  );
};

export default LayoutHead;
