import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { Menu } from '@chakra-ui/react';

import MenuButton from './components/MenuButton';
import MenuList from './components/MenuList';

import { IMenuLists } from '@/types/header-list';

interface ICustomMenuList {
  lists: IMenuLists[];
  Button?: ReactNode;
  isMobile?: boolean;
  isLink?: boolean;
}

const StyledMobileMenuList = styled(Box)(() => ({}));

const StyledMenu = styled(Menu)(() => ({}));

const CustomMenuList: FC<ICustomMenuList> = ({ lists, Button, isMobile, isLink }) => {
  return (
    <StyledMobileMenuList>
      <StyledMenu>
        <MenuButton Button={Button} isMobile={isMobile ? isMobile : false} />
        <MenuList lists={lists} isLink={isLink} />
      </StyledMenu>
    </StyledMobileMenuList>
  );
};

export default CustomMenuList;
