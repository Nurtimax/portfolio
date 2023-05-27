import { FC } from 'react';
import { Toolbar, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '../loading';

import ProfileStatus from './components/ProfileStatus';

const Logo = dynamic(() => import('../logo'), {
  loading: () => <Loading />
});
const NavigationMenu = dynamic(() => import('./components/NavigationMenu'), {
  loading: () => <Loading />
});

const StyledMainHeader = styled(Toolbar)(() => ({
  padding: '0 !important',
  display: 'grid',
  gridTemplateColumns: '1fr 1.9fr .1fr',
  width: '90%',
  margin: '0 auto',
  gap: '1rem'
}));

const MainHeader: FC = () => {
  return (
    <StyledMainHeader>
      <Logo />
      <NavigationMenu />
      <ProfileStatus />
    </StyledMainHeader>
  );
};

export default MainHeader;
