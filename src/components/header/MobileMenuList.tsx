import { FC, useState } from 'react';
import { Box, BoxProps, IconButton, Menu, MenuItem, styled } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { MENULISTS } from '@/utils/constants/menu-list';
import { animateScroll as scroll } from 'react-scroll';
import { scrollToElement } from '@/utils/generals';

interface MobileMenuListProps extends BoxProps {}

const MobileMenuList: FC<MobileMenuListProps> = ({ ...rest }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <StyledMobileMenuList {...rest}>
      <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MoreVertIcon />
        </IconButton>
      </Box>
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {MENULISTS.map((list) => (
          <MenuItem key={list.id} onClick={() => scrollToElement(list.path)}>
            {list.children}
          </MenuItem>
        ))}
      </Menu>
    </StyledMobileMenuList>
  );
};

export default MobileMenuList;

const StyledMobileMenuList = styled(Box)(() => ({}));