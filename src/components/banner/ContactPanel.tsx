import { FC } from 'react';
import { Box, Button, styled } from '@mui/material';
import Headlines from './Headlines';
import SocialMediaIcons from './SocialMediaIcons';

interface ContactPanelProps {}

const ContactPanel: FC<ContactPanelProps> = ({}) => {
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
