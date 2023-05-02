import dynamic from 'next/dynamic';

//

export const About = dynamic(() => import('./about'), {
  loading: () => <p>Loading...</p>
});
export const Providers = dynamic(() => import('./providers'), {
  loading: () => <p>Loading...</p>
});
export const Services = dynamic(() => import('./services'), {
  loading: () => <p>Loading...</p>
});
export const Projects = dynamic(() => import('./projects'), {
  loading: () => <p>Loading...</p>
});
export const Contact = dynamic(() => import('./contact'), {
  loading: () => <p>Loading...</p>
});
