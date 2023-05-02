import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const MenuList = dynamic(() => import('./MenuList'), {
  loading: () => <p>Loading...</p>
});
const MobileMenuList = dynamic(() => import('./MobileMenuList'), {
  loading: () => <p>Loading...</p>
});

const StyledNavigationMenu = styled(Box)(() => ({
  color: '#f5f5f5'
}));

const NavigationMenu: FC = () => {
  return (
    <StyledNavigationMenu>
      <MenuList />
      <MobileMenuList />
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;
