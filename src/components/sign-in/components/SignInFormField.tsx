import { FC } from 'react';
import { Grid, GridProps, Typography, styled } from '@mui/material';

import { Input } from '@/components/UI';
import { InputProps } from '@/components/UI/input';

interface ISignInFormFieldProps extends GridProps {
  [key: string]: unknown;
  inputAttr: InputProps;
  errorMessage?: string;
}

const StyledSignInFormField = styled(Grid)(() => ({}));

const SignInFormField: FC<ISignInFormFieldProps> = ({ inputAttr, errorMessage, ...props }) => {
  return (
    <StyledSignInFormField item xs={12} {...props}>
      <Input {...inputAttr} />
      {errorMessage && <Typography>{errorMessage}</Typography>}
    </StyledSignInFormField>
  );
};

export default SignInFormField;
