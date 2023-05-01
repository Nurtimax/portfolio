import { FC } from 'react';
import { Box, Typography, styled } from '@mui/material';

interface ILogoProps {}

const Logo: FC<ILogoProps> = ({}) => {
  return (
    <StyledLogo>
      <Typography component="span" className="first_slice">
        N
      </Typography>
      <Typography component="span">urtimax</Typography>
    </StyledLogo>
  );
};

export default Logo;

const StyledLogo = styled(Box)(() => ({
  display: 'flex',
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
