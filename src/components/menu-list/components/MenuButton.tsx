import { FC, ReactNode } from 'react';
import { Box, styled } from '@mui/material';
import { MenuButton as ChakraButton } from '@chakra-ui/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IMenuButtonProps {
  Button: ReactNode;
  isMobile: boolean;
}

const StyledMenuButton = styled(Box)(() => ({}));

const StyledChakraButton = styled(ChakraButton)(() => ({
  background: 'none',
  border: 'none',
  color: 'white',
  cursor: 'pointer'
}));

const MenuButton: FC<IMenuButtonProps> = ({ Button, isMobile }) => {
  return (
    <StyledMenuButton sx={{ display: isMobile ? { xs: 'flex', md: 'none' } : {} }}>
      <StyledChakraButton>{Button ? Button : <MoreVertIcon />}</StyledChakraButton>
    </StyledMenuButton>
  );
};

export default MenuButton;
