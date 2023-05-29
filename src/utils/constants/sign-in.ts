import { PAGES } from './pages';

import { ISignInProviders } from '@/types/sign-in';
import { IMenuLists } from '@/types/header-list';
import { Github, Google } from '@/assets';

export const SIGNIN_LISTS: IMenuLists[] = [
  { id: 1, children: 'Sign In', path: PAGES.SIGNIN },
  { id: 2, children: 'Sign Up', path: PAGES.SIGNUP }
];

export const SIGNIN_PROVIDERS: ISignInProviders[] = [
  { id: 1, ICON: Google, width: '80%', height: '80%' },
  { id: 2, ICON: Github, width: '60%', height: '60%' }
];
