import { FC } from 'react';
import { Box, styled } from '@mui/material';

import MainContactContent from './components/MainContactContent';

const StyledContact = styled(Box)(() => ({
  padding: '1rem 0',

  height: '80vh'
}));

const Contact: FC = () => {
  return (
    <StyledContact>
      <MainContactContent />
    </StyledContact>
  );
};

export default Contact;
