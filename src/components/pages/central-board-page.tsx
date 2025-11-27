import React from 'react'
import HeroBanner from '../ui/hero-banner'

function CentralBoardPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="SCB Page Hero"
        header1="SAMAHAN"
        header2="CENTRAL BOARD"
      />
    </div>
  )
}

export default CentralBoardPage