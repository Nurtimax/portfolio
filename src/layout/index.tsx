import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('./footer'), {
  loading: () => <p>Loading...</p>
});
const MainLayout = dynamic(() => import('./main'), {
  loading: () => <p>Loading...</p>
});
const LayoutHead = dynamic(() => import('./LayoutHead'), {
  loading: () => <p>Loading...</p>
});

interface ILayoutProps {
  children: ReactNode;
}

const StyledLayout = styled(Box)(({ theme }) => ({
  color: 'white',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '110%'
  }
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
