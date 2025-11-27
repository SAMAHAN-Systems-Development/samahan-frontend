import React from 'react'
import HeroBanner from '../ui/hero-banner'

function DevelopersPage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
        <HeroBanner
        imageSrc="/images/hero-images/DEVELOPERS-Hero.png"
        imageAlt="Developers Page Hero"
        header1='MEET THE'
        header2="DEVELOPERS"
      />
    </div>
  )
}

export default DevelopersPage