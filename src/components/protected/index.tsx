import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/hook/react-redux';
import { authenticationReducer } from '@/store/slices/authentication';

interface IProtectedProps {
  children: ReactNode;
}

const ProtectedPages: FC<IProtectedProps> = ({ children }) => {
  const { role } = useAppSelector((state) => authenticationReducer(state));

  const router = useRouter();

  if (role) {
    if (role === 'ADMIN') {
      return <>{children}</>;
    }
    router.push('/');
    return null;
  }
  router.push('/');
  return null;
};

export default ProtectedPages;
