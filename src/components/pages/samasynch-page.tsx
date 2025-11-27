import React from 'react'
import SamaSynchCalendarSection from '../sections/samasynch-calendar-section'
import HeroBanner from '../ui/hero-banner'

function SamasynchPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/SAMASYNCH-Hero.png"
        imageAlt="Samasynch Page Hero"
        header2="SAMASYNCH"
      />
      <SamaSynchCalendarSection />
    </div>
  )
}

export default SamasynchPage