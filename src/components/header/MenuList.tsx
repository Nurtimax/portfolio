import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MenuItem from './MenuItem';

import { MENULISTS } from '@/utils/constants/menu-list';

const StyledMenuList = styled(Box)(() => ({
  display: 'flex',
  gap: '2rem'
}));

const MenuList: FC = () => {
  return (
    <StyledMenuList sx={{ display: { xs: 'none', md: 'flex' } }}>
      {MENULISTS.map((list) => (
        <MenuItem to={list.path} key={list.id}>
          {list.children}
        </MenuItem>
      ))}
    </StyledMenuList>
  );
};

export default MenuList;
