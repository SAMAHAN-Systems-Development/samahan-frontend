import React from 'react'
import HeroBanner from '../ui/hero-banner'
import ProfileGroup from '../sections/profile-group'
import ProfileCard from '../ui/profile-card'

function DevelopersPage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/DEVELOPERS-Hero.png"
        imageAlt="Developers Page Hero"
        header1='MEET THE'
        header2="DEVELOPERS"
      />

      <ProfileGroup 
        groupTitle='Project Heads' 
        description='Lead and managed the development of the SAMAHAN Website.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/ellyanna-du.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/john-lampa.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/karl-natividad.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/sarah-haw.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

        </div>
      </ProfileGroup>

      {/* ============ UI/UX TEAM (5 Members) ============ */}
      {/* Mobile: 2 - 2 - 1 (Centered) | Desktop: 3 - 2 */}
      <ProfileGroup groupTitle='UI/UX Team'>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          {/* 1. John Rivera - Mobile: Left | Desktop: Left */}
          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/john-rivera.png', imageAlt: 'John Rivera' }}
              variant='developer'
            />
          </div>

          {/* 2. Shanaiah Cava - Mobile: Right | Desktop: Center */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/shanaiah-cava.png', imageAlt: 'Shanaiah Cava' }}
              variant='developer'
            />
          </div>

          {/* 3. Beatrice Donton - Mobile: Row 2 Left | Desktop: Right */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/beatrice-donton.png', imageAlt: 'Beatrice Donton' }}
              variant='developer'
            />
          </div>

          {/* 4. Geah Igtanloc - Mobile: Row 2 Right | Desktop: Row 2 Center-Left */}
          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/geah-igtanloc.png', imageAlt: 'Geah Igtanloc' }}
              variant='developer'
            />
          </div>

          {/* 5. Trixia Maligad - Mobile: Row 3 Centered | Desktop: Row 2 Center-Right */}
          <div className="col-span-2 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/trixia-maligad.png', imageAlt: 'Trixia Maligad' }}
              variant='developer'
            />
          </div>

        </div>
      </ProfileGroup>

      {/* ============ FRONTEND TEAM (6 Members) ============ */}
      {/* Mobile: 2 - 2 - 2 | Desktop: 3 - 3 */}
      <ProfileGroup groupTitle='Frontend Team'>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          {/* 1. Hanz Regalado */}
          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/hanz-regalado.png', imageAlt: 'Hanz Regalado' }}
              variant='developer'
            />
          </div>

          {/* 2. Ralph Dulce */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/ralph-dulce.png', imageAlt: 'Ralph Dulce' }}
              variant='developer'
            />
          </div>

          {/* 3. Bernard Pacanza */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/bernard-pacanza.png', imageAlt: 'Bernard Pacanza' }}
              variant='developer'
            />
          </div>

          {/* 4. Kirby Calong */}
          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/kirby-calong.png', imageAlt: 'Kirby Calong' }}
              variant='developer'
            />
          </div>

          {/* 5. Brian Vitualla */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/brian-vitualla.png', imageAlt: 'Brian Vitualla' }}
              variant='developer'
            />
          </div>

          {/* 6. EJ Liu */}
          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{ imageUrl: '/images/developers/ej-liu.png', imageAlt: 'EJ Liu' }}
              variant='developer'
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='Backend Team' 
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/greece-ancog.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/emmanuel-aguado.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/christian-jimenez.png',
                imageAlt: 'Profile Picture'
              }}
              variant={["taller", "developer"]}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='Quality Assurance' 
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/kristyle-modin.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/lyuji-fabular.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='Dev Ops'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/developers/pretty-misuarez.png',
                imageAlt: 'Profile Picture'
              }}
              variant='developer'
            />
          </div>

        </div>
      </ProfileGroup>

    </div>
  )
}

export default DevelopersPage