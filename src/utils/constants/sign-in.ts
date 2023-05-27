import { PAGES } from './pages';

import { IMenuLists } from '@/types/header-list';

export const SIGNIN_LISTS: IMenuLists[] = [
  { id: 1, children: 'Sign In', path: PAGES.SIGNIN },
  { id: 2, children: 'Sign Up', path: PAGES.SIGNUP }
];
