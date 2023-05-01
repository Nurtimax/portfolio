import { FC } from 'react';
import { Box, Container, Typography, styled } from '@mui/material';

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled(Box)(() => ({}));
