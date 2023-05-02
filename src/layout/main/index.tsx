import { FC, ReactNode } from 'react';
import { Box, Container, styled } from '@mui/material';

interface MainLayoutProps {
  children: ReactNode;
}

const StyledMainLayout = styled(Box)(() => ({}));

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledMainLayout>
      <Container>{children}</Container>
    </StyledMainLayout>
  );
};

export default MainLayout;
