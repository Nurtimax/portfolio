export const PAGES: IPages = {
  HOME: '/',
  ABOUT: 'about',
  SERVICES: 'services',
  PROJECTS: 'projects',
  CONTACT: 'contact',
  MY_SKILLS: 'my-skills',
  SIGNIN: '/sign-in',
  SIGNUP: '/sign-up'
};

interface IPages {
  HOME: PagesTitles;
  ABOUT: PagesTitles;
  SERVICES: PagesTitles;
  PROJECTS: PagesTitles;
  CONTACT: PagesTitles;
  MY_SKILLS: PagesTitles;
  SIGNIN: '/sign-in';
  SIGNUP: '/sign-up';
}

export type PagesTitles =
  | '/'
  | 'about'
  | 'services'
  | 'projects'
  | 'contact'
  | 'my-skills'
  | '/sign-in'
  | '/sign-up';
