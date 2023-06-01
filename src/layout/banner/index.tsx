import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';

import { MainBanner } from '@/components';

const StyledBanner = styled(Box)(() => ({
  background: '#292929',
  width: '100%',
  height: '100vh'
}));

const Banner: FC = () => {
  return (
    <StyledBanner>
      <Container>
        <MainBanner />
      </Container>
    </StyledBanner>
  );
};

export default Banner;
