import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { MainBanner } from '@/components';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <StyledBanner>
      <Container>
        <MainBanner />
      </Container>
    </StyledBanner>
  );
};

export default Banner;

const StyledBanner = styled(Box)(() => ({
  background: '#292929',
  width: '100%'
}));
