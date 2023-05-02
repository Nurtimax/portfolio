import { FC } from 'react';
import { Box, Button, styled } from '@mui/material';
import dynamic from 'next/dynamic';

const Headlines = dynamic(() => import('./Headlines'), {
  loading: () => <p>Loading...</p>
});
const SocialMediaIcons = dynamic(() => import('./SocialMediaIcons'), {
  loading: () => <p>Loading...</p>
});

const StyledContactPanel = styled(Box)(({ theme }) => ({
  height: '100%',
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
    <StyledContactPanel>
      <Headlines />
      <StyledButton variant="contained" color="error">
        Let's talk
      </StyledButton>
      <SocialMediaIcons />
    </StyledContactPanel>
  );
};

export default ContactPanel;
