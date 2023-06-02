import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainServices } from '@/components';
import { PAGES } from '@/utils/constants/pages';

const StyledServices = styled(Box)(() => ({}));

const Services: FC = () => {
  return (
    <StyledServices>
      <Element name={PAGES.SERVICES} id={PAGES.SERVICES} />
      <Container>
        <MainServices />
      </Container>
    </StyledServices>
  );
};

export default Services;
