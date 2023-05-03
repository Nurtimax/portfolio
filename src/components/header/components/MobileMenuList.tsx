import { FC, MouseEvent, useState } from 'react';
import { Box, IconButton, Menu, MenuItem, styled } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { MENULISTS } from '@/utils/constants/menu-list';
import { scrollToElement } from '@/utils/generals';

const StyledMobileMenuList = styled(Box)(() => ({}));

const MobileMenuList: FC = () => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState<null | HTMLElement>(null);
  const [selected, setSelected] = useState<number>(0);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const clickMenuItemHandler = (path: string, id: number) => {
    setSelected(id);
    scrollToElement(path);
    handleMobileMenuClose();
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';

  return (
    <StyledMobileMenuList>
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
          horizontal: 'left'
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {MENULISTS.map((list) => (
          <MenuItem
            key={list.id}
            onClick={() => clickMenuItemHandler(list.path, list.id)}
            selected={list.id === selected}
          >
            {list.children}
          </MenuItem>
        ))}
      </Menu>
    </StyledMobileMenuList>
  );
};

export default MobileMenuList;
