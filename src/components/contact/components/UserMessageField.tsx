import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

interface IUserMessageFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserMessageField = styled(Grid)(() => ({}));

const UserMessageField: FC<IUserMessageFieldProps> = (props) => {
  return (
    <StyledUserMessageField item {...props}>
      UserMessageField
    </StyledUserMessageField>
  );
};

export default UserMessageField;
