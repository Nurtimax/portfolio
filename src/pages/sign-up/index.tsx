import { FC } from 'react';

import { SignUp } from '@/containers';

interface ISignUpPageProps {
  [key: string]: unknown;
}

const SignUpPage: FC<ISignUpPageProps> = () => {
  return <SignUp />;
};

export default SignUpPage;
