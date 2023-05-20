import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import UserNameField from './UserNameField';
import UserEmailField from './UserEmailField';
import UserMessageField from './UserMessageField';
import SubmitFieldsButton from './SubmitFieldsButton';

interface IFormContentProps extends GridProps {
  [key: string]: unknown;
}

const StyledFormContent = styled(Grid)(() => ({}));

const FormContent: FC<IFormContentProps> = () => {
  return (
    <StyledFormContent container spacing={3}>
      <UserNameField md={6} xs={12} />
      <UserEmailField md={6} />
      <UserMessageField xs={12} />
      <SubmitFieldsButton xs={12} />
    </StyledFormContent>
  );
};

export default FormContent;
