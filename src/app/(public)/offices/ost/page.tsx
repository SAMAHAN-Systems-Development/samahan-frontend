import OSTPage from '@/components/pages/ost-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Office of the SAMAHAN Treasurer - SAMAHAN Website',
  description: 'Office of the Secretary for Technology of SAMAHAN.',
}

function Page() {
  return (
    <div>
      <OSTPage />
    </div>
  )
}

export default Page