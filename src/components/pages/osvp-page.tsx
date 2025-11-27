import React from 'react'
import HeroBanner from '../ui/hero-banner'
import OtherOffices from '../sections/other-offices'

function OSVPPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OSVP-Hero.png"
        imageAlt="OSVP Page Hero"
        header1="OFFICE OF THE"
        header2="VICE PRESIDENT"
      />
      <OtherOffices office="osvp" />
    </div>
  )
}

export default OSVPPage