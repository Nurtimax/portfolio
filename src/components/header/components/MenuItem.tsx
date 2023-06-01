import { FC, ReactNode } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { Link } from 'react-scroll';

import { useAppDispatch, useAppSelector } from '@/hook/react-redux';
import { PagesTitles } from '@/utils/constants/pages';
import { actionLandingPositionSlice } from '@/store/slices/landing-position';

interface MenuItemProps {
  to: PagesTitles;
  children: ReactNode;
}

interface IStyledMenuItem extends BoxProps {
  active: string;
}

const StyledMenuItem = styled(Box)<IStyledMenuItem>(({ active }) => ({
  color: active === 'true' ? 'red' : '#f5f5f5',
  cursor: 'pointer'
}));

const MenuItem: FC<MenuItemProps> = ({ to, children }) => {
  const { position } = useAppSelector((state) => state.landingPosition.data);

  const dispatch = useAppDispatch();

  const clickHandler = () => {
    dispatch(actionLandingPositionSlice.changePosition(to));
  };

  return (
    <StyledMenuItem active={String(position === to)}>
      <Link
        activeClass="active"
        to={to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={clickHandler}
      >
        {children}
      </Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
