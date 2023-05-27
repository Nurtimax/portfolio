import { FC } from 'react';

import { SignIn } from '@/containers';

interface ISignInPageProps {
  [key: string]: unknown;
}

const SignInPage: FC<ISignInPageProps> = () => {
  return <SignIn />;
};

export default SignInPage;
