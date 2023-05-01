import { FC, ReactNode, cloneElement } from 'react';
import { Box, CssBaseline, Toolbar, styled, useScrollTrigger } from '@mui/material';
import Header from './header';
import Footer from './footer';
import MainLayout from './main';
import Banner from './banner';
import { Element } from 'react-scroll';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <CssBaseline />
      <Element name="/" id="/" />
      <Header />
      <Toolbar />
      <Banner />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled(Box)(({ theme }) => ({
  color: 'white',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '110%'
  }
}));
