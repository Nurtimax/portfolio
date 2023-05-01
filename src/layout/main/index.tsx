import { FC, ReactNode } from 'react';
import { Box, Container, styled } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledMainLayout>
      <Container>{children}</Container>
    </StyledMainLayout>
  );
};

export default MainLayout;

const StyledMainLayout = styled(Box)(() => ({
  padding: '5rem 0 0'
}));
