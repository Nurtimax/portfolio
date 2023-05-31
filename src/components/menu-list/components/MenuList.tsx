import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { MenuList as ChakraMenuList } from '@chakra-ui/react';

import MenuItem from './MenuItem';

import { IMenuLists } from '@/types/header-list';
import { useAppDispatch, useAppSelector } from '@/hook/react-redux';
import { PagesTitles } from '@/utils/constants/pages';
import { actionLandingPositionSlice } from '@/store/slices/landing-position';

interface IMenuListProps {
  children?: ReactNode;
  lists: IMenuLists[];
  isLink?: boolean;
}

const StyledMenuList = styled(Box)(() => ({
  '& .css-0': {
    zIndex: 100000000
  }
}));

const StyledCakraMenuList = styled(ChakraMenuList)(({ theme }) => ({
  background: '#201f1f',
  padding: '.5rem',
  width: '15vw',
  borderRadius: '3px',
  display: 'grid',
  gap: '3px',
  [theme.breakpoints.down('sm')]: {
    width: '55vw'
  }
}));

const MenuList: FC<IMenuListProps> = ({ lists, isLink }) => {
  const { position } = useAppSelector((state) => state.landingPosition.data);

  const dispatch = useAppDispatch();

  const changeSelectedItemHandler = (item: PagesTitles) => {
    dispatch(actionLandingPositionSlice.changePosition(item));
  };

  return (
    <StyledMenuList>
      <StyledCakraMenuList>
        {lists.map(({ id, children, path }) => (
          <MenuItem
            to={path}
            key={id}
            selectedItem={position}
            setSelectedItem={changeSelectedItemHandler}
            isLink={isLink}
          >
            {children}
          </MenuItem>
        ))}
      </StyledCakraMenuList>
    </StyledMenuList>
  );
};

export default MenuList;
