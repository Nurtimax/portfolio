import { FC } from 'react';
import { Box, styled } from '@mui/material';

import NavigationMenu from './NavigationMenu';

import Logo from '@/components/logo';

interface IMainHeaderContentProps {
  [key: string]: unknown;
}

const StyledMainHeaderContent = styled(Box)(() => ({
  padding: '0 !important',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  width: '90%',
  margin: '0 auto',
  gap: '1rem'
}));

const MainHeaderContent: FC<IMainHeaderContentProps> = () => {
  return (
    <StyledMainHeaderContent>
      <Logo />
      <NavigationMenu />
    </StyledMainHeaderContent>
  );
};

export default MainHeaderContent;
