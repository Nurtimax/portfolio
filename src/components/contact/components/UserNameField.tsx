import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import { Input } from '@/components/UI';

interface IUserNameFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserNameField = styled(Grid)(() => ({}));

const UserNameField: FC<IUserNameFieldProps> = (props) => {
  return (
    <StyledUserNameField item {...props}>
      <Input
        htmlFor="name"
        variants="form"
        FormLableProps={{ children: 'Name' }}
        FormControle={{ color: 'error' }}
      />
    </StyledUserNameField>
  );
};

export default UserNameField;
