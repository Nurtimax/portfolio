import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import Headlines from './Headlines';
import NavigateButton from './NavigateButton';

import SocialMediaIcons from '@/components/social-media-icons';

const StyledContactPanel = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateRows: '1fr .3fr 1fr'
  }
}));

const ContactPanel: FC = () => {
  return (
    <StyledContactPanel item md={6} xs={12}>
      <Headlines />
      <NavigateButton />
      <SocialMediaIcons />
    </StyledContactPanel>
  );
};

export default ContactPanel;
