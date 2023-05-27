import Layout from '@/layout';

export default function Home() {
  return (
    <>
      <Layout />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {}
  };
}
