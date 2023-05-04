import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Menu } from '@chakra-ui/react';

import MenuButton from './components/MenuButton';
import MenuList from './components/MenuList';

// import { MENULISTS } from '@/utils/constants/menu-list';
// import { scrollToElement } from '@/utils/generals';

const StyledMobileMenuList = styled(Box)(() => ({}));

const StyledMenu = styled(Menu)(() => ({}));

const MobileMenuList: FC = () => {
  return (
    <StyledMobileMenuList>
      <StyledMenu>
        <MenuButton />
        <MenuList />
      </StyledMenu>
    </StyledMobileMenuList>
  );
};

export default MobileMenuList;
