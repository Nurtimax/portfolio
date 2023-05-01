import { FC } from 'react';
import { Box, styled } from '@mui/material';
import MenuList from './MenuList';
import MobileMenuList from './MobileMenuList';

interface NavigationMenuProps {}

const NavigationMenu: FC<NavigationMenuProps> = ({}) => {
  return (
    <StyledNavigationMenu>
      <MenuList sx={{ display: { xs: 'none', md: 'flex' } }} />
      <MobileMenuList />
    </StyledNavigationMenu>
  );
};

export default NavigationMenu;

const StyledNavigationMenu = styled(Box)(() => ({
  color: '#f5f5f5'
}));
