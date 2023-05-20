import { FC } from 'react';
import { Box, styled } from '@mui/material';

import Headlines from './components/Headlines';
import FormContent from './components/FormContent';

const StyledContact = styled(Box)(() => ({}));

const Contact: FC = () => {
  return (
    <StyledContact>
      <Headlines />
      <FormContent />
    </StyledContact>
  );
};

export default Contact;
