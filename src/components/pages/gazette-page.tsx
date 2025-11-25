import React from 'react'
import ConstitutionFile from '../ConstitutionFile'
import HeroBanner from '../ui/hero-banner'

function GazettePage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/GAZETTE-Hero.png"
        imageAlt="Gazette Page Hero"
        header2="GAZETTE"
      />
      <div className='flex flex-col justify-center items-center'>
        <ConstitutionFile />
        <div className='h-10'></div>
      </div>
    </div>
    
  )
}

export default GazettePage
