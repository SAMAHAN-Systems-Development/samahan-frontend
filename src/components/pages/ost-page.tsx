import React from 'react'
import HeroBanner from '../ui/hero-banner'
import OtherOffices from '../sections/other-offices'

function OSTPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="OST Page Hero"
        header1="OFFICE OF THE"
        header2="TREASURER"
      />
      <OtherOffices office="ost" />
    </div>
  )
}

export default OSTPage