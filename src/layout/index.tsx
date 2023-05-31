import { FC, useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';
import { useAppDispatch } from '@/hook/react-redux';
import { actionLandingPositionSlice } from '@/store/slices/landing-position';

const MainLayout = dynamic(() => import('./main'), {
  loading: () => <Loading />
});
const LayoutHead = dynamic(() => import('./LayoutHead'), {
  loading: () => <Loading />
});

const StyledLayout = styled(Box)(({ theme }) => ({
  color: 'white',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    width: '110%'
  }
}));

const Layout: FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const dispatch = useAppDispatch();

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    if (scrollPosition > 5500) {
      dispatch(actionLandingPositionSlice.changePosition('contact'));
    } else if (scrollPosition > 3500) {
      dispatch(actionLandingPositionSlice.changePosition('projects'));
    } else if (scrollPosition > 2500) {
      dispatch(actionLandingPositionSlice.changePosition('services'));
    } else if (scrollPosition > 1350) {
      dispatch(actionLandingPositionSlice.changePosition('my-skills'));
    } else if (scrollPosition > 650) {
      dispatch(actionLandingPositionSlice.changePosition('about'));
    } else {
      dispatch(actionLandingPositionSlice.changePosition('/'));
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch, scrollPosition]);

  return (
    <StyledLayout>
      <LayoutHead />
      <MainLayout />
    </StyledLayout>
  );
};

export default Layout;
