import React from 'react'
import HeroBanner from '../ui/hero-banner'

function AcademixPage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/ACADEMIX-Hero.png"
        imageAlt="Academix Page Hero"
        header1='ACADHUB'
        header2="ACADEMIX"
      />
        
    </div>
  )
}

export default AcademixPage