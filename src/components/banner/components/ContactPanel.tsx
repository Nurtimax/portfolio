import { FC } from 'react';
import { Button, Grid, styled } from '@mui/material';
import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

const Headlines = dynamic(() => import('./Headlines'), {
  loading: () => <Loading />
});
const SocialMediaIcons = dynamic(() => import('./SocialMediaIcons'), {
  loading: () => <Loading />
});

const StyledContactPanel = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateRows: '1fr .3fr 1fr'
  }
}));

const StyledButton = styled(Button)(() => ({
  justifySelf: 'flex-start',
  alignSelf: 'center'
}));

const ContactPanel: FC = () => {
  return (
    <StyledContactPanel item md={6} xs={12}>
      <Headlines />
      <StyledButton variant="contained" color="error">
        Let's talk
      </StyledButton>
      <SocialMediaIcons />
    </StyledContactPanel>
  );
};

export default ContactPanel;
