import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const Footer = dynamic(() => import('./footer'), {
  loading: () => <Loading />
});
const MainLayout = dynamic(() => import('./main'), {
  loading: () => <Loading />
});
const LayoutHead = dynamic(() => import('./LayoutHead'), {
  loading: () => <Loading />
});

interface ILayoutProps {
  children: ReactNode;
}

const StyledLayout = styled(Box)(() => ({
  color: 'white',
  width: '100%'
  // [theme.breakpoints.down('md')]: {
  //   width: '110%'
  // }
}));

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <LayoutHead />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
