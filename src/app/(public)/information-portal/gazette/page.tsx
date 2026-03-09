import GazettePage from '@/components/pages/gazette-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Gazette - SAMAHAN Website',
  description: 'Read the latest SAMAHAN Gazette publications and announcements.',
}

function Page() {
  return (
    <div>
        <GazettePage />
    </div>
  )
}

export default Page