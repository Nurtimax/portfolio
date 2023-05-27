// import Layout from '@/layout';

import Animated from '@/components/animated';

export default function Home() {
  return (
    <>
      {/* <Layout /> */}
      <Animated />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {}
  };
}
