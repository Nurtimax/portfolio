import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import ServicesItem from './ServicesItem';

import { SERVICES_CARD } from '@/utils/constants';

interface IServicesListProps extends GridProps {
  [key: string]: unknown;
}

const StyledServicesList = styled(Grid)(() => ({
  height: '90%',
  padding: '2rem 0'
}));

const ServicesList: FC<IServicesListProps> = () => {
  return (
    <StyledServicesList container spacing={2} gap={3.5}>
      {SERVICES_CARD.map((service) => (
        <ServicesItem key={service.id} ICON={service.ICON} title={service.title} />
      ))}
    </StyledServicesList>
  );
};

export default ServicesList;
