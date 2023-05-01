import { FC } from 'react';
import { Box, styled } from '@mui/material';
import { MainContact } from '@/components';
import { Element } from 'react-scroll';

interface IContactProps {}

const Contact: FC<IContactProps> = ({}) => {
  return (
    <StyledContact>
      <Element name="contact" id="contact">
        <MainContact />
      </Element>
    </StyledContact>
  );
};

export default Contact;

const StyledContact = styled(Box)(() => ({
  height: '80vh'
}));
