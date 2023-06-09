import { PAGES } from './pages';

import { IMenuLists } from '@/types/header-list';

export const MENULISTS: IMenuLists[] = [
  { id: 1, children: 'Home', path: PAGES.HOME },
  { id: 2, children: 'About', path: PAGES.ABOUT },
  { id: 6, children: 'My Skills', path: PAGES.MY_SKILLS },
  { id: 3, children: 'Services', path: PAGES.SERVICES },
  { id: 4, children: 'Projects', path: PAGES.PROJECTS },
  { id: 5, children: 'Contact', path: PAGES.CONTACT }
];
