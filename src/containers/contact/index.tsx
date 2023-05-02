import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainContact } from '@/components';

const StyledContact = styled(Box)(() => ({
  height: '80vh'
}));

const Contact: FC = () => {
  return (
    <StyledContact>
      <Element name="contact" id="contact">
        <MainContact />
      </Element>
    </StyledContact>
  );
};

export default Contact;
