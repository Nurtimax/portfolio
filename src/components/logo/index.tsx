import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

const StyledLogo = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  '& .MuiTypography-root': {
    fontSize: '2rem',
    color: '#f5f5f5'
  },
  '& .first_slice': {
    color: '#e80514',
    fontFamily: 'Montserrat',
    fontWeight: 600
  }
}));

const Logo: FC = () => {
  return (
    <StyledLogo>
      <Typography component="span" classNameName="first_slice">
        N
      </Typography>
      <Typography component="span">urtimax</Typography>
    </StyledLogo>
  );
};

export default Logo;
