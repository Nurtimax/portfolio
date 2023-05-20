import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import { Input } from '@/components/UI';

interface IUserEmailFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserEmailField = styled(Grid)(() => ({}));

const UserEmailField: FC<IUserEmailFieldProps> = (props) => {
  return (
    <StyledUserEmailField item {...props}>
      <Input
        htmlFor="email"
        variants="form"
        FormLableProps={{ children: 'Email' }}
        FormControle={{ color: 'error' }}
      />
    </StyledUserEmailField>
  );
};

export default UserEmailField;
