import GuidesitePage from '@/components/pages/guidesite-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Guidesite - SAMAHAN Website',
  description: 'Find guides and resources for students through SAMAHAN Guidesite.',
}

function Page() {
  return (
    <div>
      <GuidesitePage />
    </div>
  )
}

export default Page