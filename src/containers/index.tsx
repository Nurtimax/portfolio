import dynamic from 'next/dynamic';

import Loading from '@/components/loading';

//

export const About = dynamic(() => import('./about'), {
  loading: () => <Loading />
});
export const Providers = dynamic(() => import('./providers'), {
  loading: () => <Loading />
});
export const Services = dynamic(() => import('./services'), {
  loading: () => <Loading />
});
export const Projects = dynamic(() => import('./projects'), {
  loading: () => <Loading />
});
export const Contact = dynamic(() => import('./contact'), {
  loading: () => <Loading />
});
export const MySkills = dynamic(() => import('./my-skills'), {
  loading: () => <Loading />
});
export const SignIn = dynamic(() => import('./sign-in'), {
  loading: () => <Loading />
});
export const SignUp = dynamic(() => import('./sign-up'), {
  loading: () => <Loading />
});
