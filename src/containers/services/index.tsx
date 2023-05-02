import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainServices } from '@/components';

const StyledServices = styled(Box)(() => ({
  height: '80vh'
}));

const Services: FC = () => {
  return (
    <StyledServices>
      <Element name="services" id="services">
        <MainServices />
      </Element>
    </StyledServices>
  );
};

export default Services;
