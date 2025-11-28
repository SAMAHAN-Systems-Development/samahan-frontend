import React from 'react'
import HeroBanner from '../ui/hero-banner'
import OtherOffices from '../sections/other-offices'
import ProfileGroup from '../sections/profile-group'
import ProfileCard from '../ui/profile-card'
import ProjectCarouselSection from '../sections/project-carousel-section'

function OSTPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="OST Page Hero"
        header1="OFFICE OF THE"
        header2="TREASURER"
      />

      <ProfileGroup 
        groupTitle='OFFICE OF THE SAMAHAN TREASURER' 
        description='Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/mickyla-almadin.png',
                imageAlt: 'Profile Picture'
              }}
              variant='taller'
            />
          </div>

          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/alaisa-abjilina.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/ayn-lantingan.png',
                imageAlt: 'Profile Picture'
              }}
              variant='taller'
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/kristia-capitan.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN LOGISTICS DEPARTMENT' 
        description='SAMAHAN Logistics Department, formerly SAMAHAN Task Force, is a department under the Office of the SAMAHAN Treasurer. The logistics arm of the SAMAHAN is in charge of the different logistical works such as procurement and canvassing of equipment and materials; keeping records and supervision of office equipment and materials; preparing, creating, and organizing physical event materials. The department&apos;s primary goal is to make the SAMAHAN Office and events physically organized, safely keep the equipment, and assist SAMAHAN in their operations.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/tomas-nazareno.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/ralph-abarca.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN SPONSORSHIP AND SUPPORT' 
        description='SAMAHAN Sponsorship and Support is a vital arm of the SAMAHAN Central Board of Ateneo de Davao University that serves as the bridge between student organizations and both internal and external partners. It is committed to building meaningful collaborations that empower student-led initiatives through strategic partnerships, resource generation, and sustainable support.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/lyla-dabon.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/ost/rafael-canete.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProjectCarouselSection />
      <div className='h-20'></div>
      <OtherOffices office="ost" />
      <div className='h-20'></div>
    </div>
  )
}

export default OSTPage