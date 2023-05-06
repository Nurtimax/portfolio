import { FC, SVGProps } from 'react';
import { Grid, GridProps, Typography, styled } from '@mui/material';

interface IServicesItemProps extends GridProps {
  [key: string]: unknown;
  title: string;
  ICON: FC<SVGProps<SVGSVGElement>>;
}

const StyledServicesItem = styled(Grid)(() => ({
  border: '1px solid #cdcdcd',
  borderRadius: '3px',
  display: 'grid',
  padding: '0 1rem',
  '&:hover': {
    background: '#ffffff2d'
  }
}));

const ServicesItem: FC<IServicesItemProps> = ({ title, ICON, ...props }) => {
  return (
    <StyledServicesItem item md={3.8} {...props}>
      <ICON fontSize="5rem" style={{ justifySelf: 'center', color: 'white' }} />
      <Typography variant="subtitle1">{title}</Typography>
    </StyledServicesItem>
  );
};

export default ServicesItem;
