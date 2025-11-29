import React from 'react'
import HeroBanner from '../ui/hero-banner'
import ProfileGroup from '../sections/profile-group'
import ProfileCard from '../ui/profile-card'

function CentralBoardPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="SCB Page Hero"
        header1="SAMAHAN"
        header2="CENTRAL BOARD"
      />

      <ProfileGroup 
        groupTitle='CLUSTER REPRESENTATIVES' 
        description='The Cluster Representatives are the voice of the student body from their respective schools and clusters.'
      >
        {/* GRID CONTAINER */}
        {/* Mobile: 2 columns | Desktop: 3 columns */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          
          {/* 1. Filfred Kaizzer Calma */}
          <div>
            <ProfileCard 
              image={{
                imageUrl: '/images/scb/filfred-calma.png',
                imageAlt: 'Filfred Kaizzer Calma'
              }}
              variant='taller'
            />
          </div>

          {/* 2. Cyril Lou Villareal */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/cyril-villareal.png',
              imageAlt: 'Cyril Lou Villareal'
            }}
          />
          </div>
          

          {/* 3. Carl Rey Roque */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/carl-roque.png',
              imageAlt: 'Carl Rey Roque'
            }}
          />
          </div>
          

          {/* 4. Matthew Date Payumo */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/matthew-payumo.png',
              imageAlt: 'Matthew Date Payumo'
            }}
          />
          </div>
          

          {/* 5. Celine Joyce De Las Llagas */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/celine-llagas.png',
              imageAlt: 'Celine Joyce De Las Llagas'
            }}
            variant='taller'
          />
          </div>
          

          {/* 6. Francis De Barros */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/francis-barros.png',
              imageAlt: 'Francis De Barros'
            }}
          />
          </div>
          

          {/* 7. Avery Clyde Dimasuhid */}
          <div>
            <ProfileCard 
            image={{
              imageUrl: '/images/scb/avery-dimasuhid.png',
              imageAlt: 'Avery Clyde Dimasuhid'
            }}
            variant='taller'
          />
          </div>
          

          {/* 8. Kristal Eden Magno */}
          <div>
            <ProfileCard 
              image={{
                imageUrl: '/images/scb/kristal-magno.png',
                imageAlt: 'Kristal Eden Magno'
              }}
            />
          </div>
          

          {/* 9. Steven Josh Gamutan */}
          {/* Mobile: Span 2 columns (Centers him at bottom) */}
          {/* Desktop: Span 1 column (Returns to grid flow) */}
          <div className="col-span-2 lg:col-span-1">
            <ProfileCard 
              image={{
                imageUrl: '/images/scb/steven-gamutan.png',
                imageAlt: 'Steven Josh Gamutan'
              }}
            />
          </div>

        </div>
      </ProfileGroup>
      
    </div>
  )
}

export default CentralBoardPage