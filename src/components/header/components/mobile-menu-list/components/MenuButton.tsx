import { FC, ReactNode } from 'react';
import { Box, IconButton, styled } from '@mui/material';
import { MenuButton as ChakraButton } from '@chakra-ui/react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface IMenuButtonProps {
  children?: ReactNode;
}

const StyledMenuButton = styled(Box)(() => ({}));

const StyledChakraButton = styled(ChakraButton)(() => ({
  background: 'none',
  border: 'none',
  color: 'white'
}));

const MenuButton: FC<IMenuButtonProps> = () => {
  return (
    <StyledMenuButton sx={{ display: { xs: 'flex', md: 'none' } }}>
      <StyledChakraButton>
        <IconButton size="large" color="inherit">
          <MoreVertIcon />
        </IconButton>
      </StyledChakraButton>
    </StyledMenuButton>
  );
};

export default MenuButton;
