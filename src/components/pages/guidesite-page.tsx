import React from 'react'
import HeroBanner from '../ui/hero-banner'

function GuidesitePage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
        <HeroBanner
        imageSrc="/images/hero-images/GUIDESITE-Hero.png"
        imageAlt="Guidesite Page Hero"
        header2="GUIDESITE"
      />
    </div>
  )
}

export default GuidesitePage