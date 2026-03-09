import OSGPage from '@/components/pages/osg-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Office of the SAMAHAN Secretary-General - SAMAHAN Website',
  description: 'Office of the Secretary-General of SAMAHAN.',
}

function Page() {
  return (
    <div>
      <OSGPage />
    </div>
  )
}

export default Page