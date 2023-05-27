import { FC } from 'react';

import { MainSignIn } from '@/components';

interface ISignInProps {
  [key: string]: unknown;
}

const SignIn: FC<ISignInProps> = () => {
  return (
    <>
      <MainSignIn />
    </>
  );
};

export default SignIn;
