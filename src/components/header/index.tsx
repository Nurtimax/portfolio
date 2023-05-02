import { FC } from 'react';
import { Toolbar, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const Logo = dynamic(() => import('../logo'), {
  loading: () => <p>Loading...</p>
});
const NavigationMenu = dynamic(() => import('./NavigationMenu'), {
  loading: () => <p>Loading...</p>
});

const StyledMainHeader = styled(Toolbar)(() => ({
  padding: '0 !important',
  display: 'flex',
  justifyContent: 'space-between'
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
