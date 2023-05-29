import { FC, ReactNode } from 'react';
import { styled } from '@mui/material';
import { MenuItem as ChakraMenuItem } from '@chakra-ui/react';
import { Link as ReactScrollLink } from 'react-scroll';
import Link from 'next/link';

interface IMenuItemProps {
  children?: ReactNode;
  to: string;
  setSelectedItem: (to: string) => void;
  selectedItem: string;
  isLink?: boolean;
}

const StyledMenuItem = styled(ChakraMenuItem)(() => ({
  background: '#1A1A25',
  color: '#cdcdcd',
  padding: '1rem',
  border: 'none',
  borderRadius: '3px',
  fontWeight: '400',
  cursor: 'pointer'
}));

const MenuItem: FC<IMenuItemProps> = ({ children, to, setSelectedItem, selectedItem, isLink }) => {
  return (
    <>
      {!isLink ? (
        <ReactScrollLink
          activeClass="active"
          to={to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          children={
            <StyledMenuItem
              onClick={() => setSelectedItem(to)}
              sx={{ background: to === selectedItem ? 'red' : '' }}
            >
              {children}
            </StyledMenuItem>
          }
        />
      ) : (
        <Link
          href={to}
          children={
            <StyledMenuItem
              onClick={() => setSelectedItem(to)}
              sx={{ background: to === selectedItem ? 'red' : '' }}
            >
              {children}
            </StyledMenuItem>
          }
        />
      )}
    </>
  );
};

export default MenuItem;
