import type { Metadata } from 'next';

import Layout from '@/layout';

export const metadata: Metadata = {
  title: 'Nurtimax',
  description: 'Main page'
};

export default function Home() {
  return <Layout />;
}

export async function getServerSideProps() {
  return {
    props: {}
  };
}
