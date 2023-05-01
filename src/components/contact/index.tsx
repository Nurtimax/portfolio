import { FC } from 'react';
import { Box, styled } from '@mui/material';

interface IContactProps {}

const Contact: FC<IContactProps> = ({}) => {
  return <StyledContact>Contact</StyledContact>;
};

export default Contact;

const StyledContact = styled(Box)(() => ({}));
