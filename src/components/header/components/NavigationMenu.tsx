import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const MenuList = dynamic(() => import('./MenuList'), {
  loading: () => <Loading />
});
const MobileMenuList = dynamic(() => import('./MobileMenuList'), {
  loading: () => <Loading />
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