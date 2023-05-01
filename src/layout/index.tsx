import { FC, ReactNode, cloneElement } from 'react';
import { Box, CssBaseline, Toolbar, styled, useScrollTrigger } from '@mui/material';
import Header from './header';
import Footer from './footer';
import MainLayout from './main';
import Banner from './banner';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <CssBaseline />
      <Header />
      <Toolbar />
      <Banner />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled(Box)(() => ({
  color: 'white'
}));
