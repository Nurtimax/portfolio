import { FC } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import MenuItem from './MenuItem';
import { MENULISTS } from '@/utils/constants/menu-list';

interface MenuListProps extends BoxProps {}

const MenuList: FC<MenuListProps> = ({ ...rest }) => {
  return (
    <StyledMenuList {...rest}>
      {MENULISTS.map((list) => (
        <MenuItem to={list.path} key={list.id}>
          {list.children}
        </MenuItem>
      ))}
    </StyledMenuList>
  );
};

export default MenuList;

const StyledMenuList = styled(Box)(() => ({
  display: 'flex',
  gap: '2rem'
}));
