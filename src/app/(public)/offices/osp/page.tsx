import OSPPage from '@/components/pages/osp-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Office of the SAMAHAN President - SAMAHAN Website',
  description: 'Office of the Secretary for Programs of SAMAHAN.',
}

function Page() {
  return (
    <div>
      <OSPPage />
    </div>
  );
}

export default Page;
