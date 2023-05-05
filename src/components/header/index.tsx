import { FC } from 'react';
import { Toolbar, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '../loading';

const Logo = dynamic(() => import('../logo'), {
  loading: () => <Loading />
});
const NavigationMenu = dynamic(() => import('./components/NavigationMenu'), {
  loading: () => <Loading />
});

const StyledMainHeader = styled(Toolbar)(() => ({
  padding: '0 !important',
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  width: '90%',
  margin: '0 auto'
}));

const MainHeader: FC = () => {
  return (
    <StyledMainHeader>
      <Logo />
      <NavigationMenu />
    </StyledMainHeader>
  );
};

export default MainHeader;
