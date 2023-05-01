import { FC } from 'react';
import { Box, Toolbar, ToolbarProps, styled } from '@mui/material';
import Logo from '../logo';
import NavigationMenu from './NavigationMenu';

interface IMainHeaderProps extends ToolbarProps {}

const MainHeader: FC<IMainHeaderProps> = ({ ...rest }) => {
  return (
    <StyledMainHeader {...rest}>
      <Logo />
      <NavigationMenu />
    </StyledMainHeader>
  );
};

export default MainHeader;

const StyledMainHeader = styled(Toolbar)(() => ({
  padding: '0 !important',
  display: 'flex',
  justifyContent: 'space-between'
}));
