import { FC, ReactNode } from 'react';
import { styled } from '@mui/material';
import { MenuItem as ChakraMenuItem } from '@chakra-ui/react';
import { Link } from 'react-scroll';

interface IMenuItemProps {
  children?: ReactNode;
  to: string;
  setSelectedItem: (to: string) => void;
  selectedItem: string;
}

const StyledMenuItem = styled(ChakraMenuItem)(() => ({
  background: '#1A1A25',
  color: '#cdcdcd',
  padding: '1rem',
  border: 'none',
  borderRadius: '3px',
  fontWeight: '400'
}));

const MenuItem: FC<IMenuItemProps> = ({ children, to, setSelectedItem, selectedItem }) => {
  return (
    <>
      <Link activeClass="active" to={to} spy={true} smooth={true} offset={-70} duration={500}>
        <StyledMenuItem
          onClick={() => setSelectedItem(to)}
          sx={{ background: to === selectedItem ? 'red' : '' }}
        >
          {children}
        </StyledMenuItem>
      </Link>
    </>
  );
};

export default MenuItem;
