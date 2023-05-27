import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

import { Input } from '@/components/UI';

interface IUserMessageFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserMessageField = styled(Grid)(() => ({}));

const UserMessageField: FC<IUserMessageFieldProps> = (props) => {
  return (
    <StyledUserMessageField item {...props}>
      <Input
        htmlFor="message"
        variants="form"
        FormLableProps={{ children: 'Message' }}
        FormControle={{ color: 'error' }}
      />
    </StyledUserMessageField>
  );
};

export default UserMessageField;
