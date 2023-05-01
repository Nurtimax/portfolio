import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import Header from './header';
import Footer from './footer';
import MainLayout from './main';

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled(Box)(() => ({}));
