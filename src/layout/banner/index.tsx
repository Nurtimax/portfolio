import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const MainBanner = dynamic(() => import('../../components/banner'), {
  loading: () => <Loading />
});

const StyledBanner = styled(Box)(() => ({
  background: '#292929',
  width: '100%'
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
