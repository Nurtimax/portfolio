import { FC } from 'react';
import { Box, CssBaseline, Toolbar, styled } from '@mui/material';
import { Element } from 'react-scroll';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';
import { PAGES } from '@/utils/constants/pages';
import { ScrollProgress } from '@/components';

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
      <Element name={PAGES.HOME} id={PAGES.HOME} />
      <Header />
      <Toolbar />
      <ScrollProgress />
      <Banner />
    </StyledLayoutHead>
  );
};

export default LayoutHead;
