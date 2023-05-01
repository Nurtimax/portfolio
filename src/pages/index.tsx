import { About, Contact, Projects, Services } from '@/containers';
import Layout from '@/layout';

export default function Home() {
  return (
    <>
      <Layout>
        <About />
        <Services />
        <Projects />
        <Contact />
      </Layout>
    </>
  );
}
