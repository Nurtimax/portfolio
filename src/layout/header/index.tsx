import { FC, ReactElement, cloneElement } from 'react';
import { AppBar, styled, useScrollTrigger } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const MainHeader = dynamic(() => import('../../components/header'), {
  loading: () => <Loading />
});

const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main
}));

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Header: FC = () => {
  return (
    <ElevationScroll>
      <StyledHeader>
        <MainHeader />
      </StyledHeader>
    </ElevationScroll>
  );
};

export default Header;
