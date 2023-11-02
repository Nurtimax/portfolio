'use client';

import type { Metadata } from 'next';

import ProtectedPages from '@/components/protected';
import MainAdmin from '@/containers/admin';

export const metadata: Metadata = {
  title: "Nurtimax's admin",
  description: 'This page is admin',
  other: {
    canonial: '/admin'
  }
};

const AdminPage = () => {
  return (
    <ProtectedPages>
      <MainAdmin />
    </ProtectedPages>
  );
};

export default AdminPage;
