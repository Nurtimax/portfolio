import { FC } from 'react';
import { Grid, styled } from '@mui/material';

import SignInFormField from './SignInFormField';

interface ISignInFormsProps {
  [key: string]: unknown;
}

const StyledSignInForms = styled(Grid)(() => ({}));

const SignInForms: FC<ISignInFormsProps> = () => {
  return (
    <StyledSignInForms container spacing={2}>
      <SignInFormField
        inputAttr={{
          htmlFor: 'email',
          variants: 'form',
          type: 'email',
          FormLableProps: { children: 'Email', color: 'error' }
        }}
      />
      <SignInFormField
        inputAttr={{
          htmlFor: 'password',
          variants: 'form',
          type: 'password',
          FormLableProps: { children: 'Password', color: 'error' }
        }}
      />
    </StyledSignInForms>
  );
};

export default SignInForms;
