import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const MainBanner = dynamic(() => import('../../components/banner'), {
  loading: () => <p>Loading...</p>
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
