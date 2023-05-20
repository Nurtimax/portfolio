import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

interface IUserNameFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserNameField = styled(Grid)(() => ({}));

const UserNameField: FC<IUserNameFieldProps> = (props) => {
  return (
    <StyledUserNameField item {...props}>
      UserNameField
    </StyledUserNameField>
  );
};

export default UserNameField;
