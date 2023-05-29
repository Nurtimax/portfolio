import { FC } from 'react';
import { Toolbar, styled } from '@mui/material';

import MainHeaderContent from './components/MainHeaderContent';

const StyledMainHeader = styled(Toolbar)(() => ({
  width: '100%',
  height: '100%'
}));

const MainHeader: FC = () => {
  return (
    <StyledMainHeader>
      <MainHeaderContent />
    </StyledMainHeader>
  );
};

export default MainHeader;
