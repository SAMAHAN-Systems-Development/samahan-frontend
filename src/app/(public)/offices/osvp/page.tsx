import OSVPPage from '@/components/pages/osvp-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Office of the SAMAHAN Vice President - SAMAHAN Website',
  description: 'Office of the Secretary for the Vice President of SAMAHAN.',
}

function Page() {
  return (
    <div>
      <OSVPPage />
    </div>
  )
}

export default Page