import React from 'react'
import HeroBanner from '../ui/hero-banner';
import OtherOffices from '../sections/other-offices';

function OSGPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OSG-Hero.png"
        imageAlt="OSG Page Hero"
        header1="OFFICE OF THE"
        header2="SECRETARY-GENERAL"
      />
      <OtherOffices office="osg" />
    </div>
  )
}

export default OSGPage