import SamasynchPage from '@/components/pages/samasynch-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'SamaSync - SAMAHAN Website',
  description: 'Stay updated with SAMAHAN events and announcements through SamaSync.',
}

function Page() {
  return (
    <div>
      <SamasynchPage />
    </div>
  )
}

export default Page