import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <StyledBanner>
      <Container>Banner</Container>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled(Box)(() => ({
    background: '#292929'
}));
