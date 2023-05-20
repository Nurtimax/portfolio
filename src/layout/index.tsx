import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const MainLayout = dynamic(() => import('./main'), {
  loading: () => <Loading />
});
const LayoutHead = dynamic(() => import('./LayoutHead'), {
  loading: () => <Loading />
});

const StyledLayout = styled(Box)(({ theme }) => ({
  color: 'white',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '110%'
  }
}));

const Layout: FC = () => {
  return (
    <StyledLayout>
      <LayoutHead />
      <MainLayout />
    </StyledLayout>
  );
};

export default Layout;
