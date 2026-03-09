
import CentralBoardPage from '@/components/pages/central-board-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Central Board - SAMAHAN Website',
  description: 'Meet the SAMAHAN Central Board members and learn about their roles.',
}

function Page() {
  return (
    <div>
      <CentralBoardPage />
    </div>
  )
}

export default Page