import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import ServicesItem from './ServicesItem';

import { SERVICES_CARD } from '@/utils/constants';

interface IServicesListProps extends GridProps {
  [key: string]: unknown;
}

const StyledServicesList = styled(Grid)(() => ({
  padding: '2rem 0',
  width: '100%'
}));

const ServicesList: FC<IServicesListProps> = () => {
  return (
    <StyledServicesList container gap={{ md: 3.5, xs: '20px !important' }}>
      {SERVICES_CARD.map((service) => (
        <ServicesItem key={service.id} ICON={service.ICON} title={service.title} />
      ))}
    </StyledServicesList>
  );
};

export default ServicesList;
