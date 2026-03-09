import MonthlyReportsPage from '@/components/pages/monthly-reports-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Monthly Reports - SAMAHAN Website',
  description: 'View SAMAHAN monthly reports and updates.',
}

function Page() {
  return (
    <div>
      <MonthlyReportsPage />
    </div>
  )
}

export default Page