import { FC } from 'react';
import { Box, Container, styled } from '@mui/material';
import { Element } from 'react-scroll';

import { MainContact } from '@/components';
import { PAGES } from '@/utils/constants/pages';

const StyledContact = styled(Box)(() => ({}));

const Contact: FC = () => {
  return (
    <StyledContact>
      <Element name={PAGES.CONTACT} id={PAGES.CONTACT} />
      <Container>
        <MainContact />
      </Container>
    </StyledContact>
  );
};

export default Contact;
