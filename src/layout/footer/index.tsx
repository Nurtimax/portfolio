import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

const StyledFooter = styled(Box)(() => ({}));

const Footer: FC = () => {
  return (
    <StyledFooter>
      <Container>Footer</Container>
    </StyledFooter>
  );
};

export default Footer;
