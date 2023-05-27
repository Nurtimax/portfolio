import { FC } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';
import { MENULISTS } from '@/utils/constants/menu-list';

const MenuList = dynamic(() => import('./MenuList'), {
  loading: () => <Loading />
});
const MobileMenuList = dynamic(() => import('../../menu-list'), {
  loading: () => <Loading />
});

const StyledNavigationMenu = styled(Box)(() => ({
  color: '#f5f5f5',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end'
}));

const NavigationMenu: FC = () => {
  return (
    <StyledNavigationMenu>
      <MenuList />
      <MobileMenuList lists={MENULISTS} isMobile />
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;
