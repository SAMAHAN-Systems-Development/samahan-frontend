import AcademixPage from '@/components/pages/academix-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Academix - SAMAHAN Website',
  description: 'Access academic resources and tools through SAMAHAN Academix.',
}

function Page() {
  return (
    <div>
      <AcademixPage />
    </div>
  )
}

export default Page