import AboutPage from '@/components/pages/about-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About - SAMAHAN Website',
  description: 'Learn about SAMAHAN, the official student government of Ateneo de Davao University.',
}

function Page() {
  return (
    <div>
      <AboutPage />
    </div>
  )
}

export default Page