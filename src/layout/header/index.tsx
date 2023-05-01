import { FC } from 'react';
import { AppBar, AppBarProps, Container, styled } from '@mui/material';
import { MainHeader } from '@/components';

interface IHeaderProps extends AppBarProps {}

const Header: FC<IHeaderProps> = ({ ...rest }) => {
  return (
    <StyledHeader {...rest}>
      <Container>
        <MainHeader />
      </Container>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled(AppBar)(({ theme }) => ({
  background: theme.palette.primary.main
}));
