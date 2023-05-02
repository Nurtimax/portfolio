import { FC, ReactNode, useMemo } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

interface MenuItemProps {
  to: string;
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
  const { pathname } = useRouter();

  const isActive = useMemo(() => {
    if (to === '/') {
      return pathname.split('/').join('') === '';
    }
    return pathname.split('/').includes(to);
  }, [pathname, to]);

  return (
    <StyledMenuItem active={String(isActive)}>
      <Link activeClass="active" to={to} spy={true} smooth={true} offset={-70} duration={500}>
        {children}
      </Link>
    </StyledMenuItem>
  );
};

export default MenuItem;
