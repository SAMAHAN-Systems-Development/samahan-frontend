import FAQPage from '@/components/pages/faq-page'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'FAQ - SAMAHAN Website',
  description: 'Frequently asked questions about SAMAHAN and its services.',
}

function Page() {
  return (
    <div>
      <FAQPage />
    </div>
  )
}

export default Page