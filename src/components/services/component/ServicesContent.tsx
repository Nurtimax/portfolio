import { FC } from 'react';
import { Box, styled } from '@mui/material';

import ServicesList from './ServicesList';
import Headlines from './Headlines';

interface IServicesContentProps {
  [key: string]: unknown;
}

const StyledServicesContent = styled(Box)(() => ({
  height: '80vh'
}));

const ServicesContent: FC<IServicesContentProps> = () => {
  return (
    <StyledServicesContent>
      <Headlines />
      <ServicesList />
    </StyledServicesContent>
  );
};

export default ServicesContent;
