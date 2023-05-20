import { FC } from 'react';
import { Grid, GridProps, styled } from '@mui/material';

interface IUserEmailFieldProps extends GridProps {
  [key: string]: unknown;
}

const StyledUserEmailField = styled(Grid)(() => ({}));

const UserEmailField: FC<IUserEmailFieldProps> = (props) => {
  return (
    <StyledUserEmailField item {...props}>
      UserEmailField
    </StyledUserEmailField>
  );
};

export default UserEmailField;
