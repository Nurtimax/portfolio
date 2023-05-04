import { FC, ReactNode, useState } from 'react';
import { Box, styled } from '@mui/material';
import { MenuList as ChakraMenuList } from '@chakra-ui/react';

import MenuItem from './MenuItem';

import { MENULISTS } from '@/utils/constants/menu-list';

interface IMenuListProps {
  children?: ReactNode;
}

const StyledMenuList = styled(Box)(() => ({}));

const StyledCakraMenuList = styled(ChakraMenuList)(({ theme }) => ({
  background: '#201f1f',
  padding: '.5rem',
  width: '30vw',
  borderRadius: '3px',
  display: 'grid',
  gap: '3px',
  [theme.breakpoints.down('sm')]: {
    width: '55vw'
  }
}));

const MenuList: FC<IMenuListProps> = () => {
  const [selectedItem, setSelectedItem] = useState<string>('/');

  const changeSelectedItemHandler = (item: string) => {
    setSelectedItem(item);
  };

  return (
    <StyledMenuList>
      <StyledCakraMenuList>
        {MENULISTS.map(({ id, children, path }) => (
          <MenuItem
            to={path}
            key={id}
            selectedItem={selectedItem}
            setSelectedItem={changeSelectedItemHandler}
          >
            {children}
          </MenuItem>
        ))}
      </StyledCakraMenuList>
    </StyledMenuList>
  );
};

export default MenuList;
