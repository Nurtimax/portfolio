import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ServicesContent from './component/ServicesContent';

const StyledServices = styled(Box)(() => ({
  padding: '3rem 0'
}));

const Services: FC = () => {
  return (
    <StyledServices>
      <ServicesContent />
    </StyledServices>
  );
};

export default Services;
