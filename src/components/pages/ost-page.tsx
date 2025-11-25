import React from 'react'
import HeroBanner from '../ui/hero-banner'

function OSTPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="OST Page Hero"
        header1="OFFICE OF THE"
        header2="TREASURER"
      />
    </div>
  )
}

export default OSTPage