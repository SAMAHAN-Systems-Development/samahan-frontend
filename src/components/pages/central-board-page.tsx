import React from 'react'
import Image from "next/image" // Import Image
import HeroBanner from '../ui/hero-banner'
import ProfileGroup from '../sections/profile-group'
import ProfileCard from '../ui/profile-card'
import Link from 'next/link'

function CentralBoardPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OST-SCB-Hero.png"
        imageAlt="SCB Page Hero"
        header1="SAMAHAN"
        header2="CENTRAL BOARD"
      />

      <div className="w-full max-w-7xl mx-auto px-8 mt-7 md:mt-16 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 justify-items-center">
          
          {/* 1. Hannah Aquino */}
          
            <div className="w-full max-w-[400px] lg:max-w-[588px]">
              <Link href={"/offices/osp"} className='w-full'>
                <Image
                  src="/images/scb/hannah-aquino.png"
                  alt="Hannah Aquino"
                  width={657}
                  height={430}
                  className="w-full h-auto object-contain"
                  priority
                  quality={100}
                />
              </Link>
              
            </div>

          {/* 2. Ken Ryle Hinojales */}
          <div className="w-full max-w-[400px] lg:max-w-[588px]">
            <Link href={"/offices/osvp"} className='w-full'>
              <Image
                src="/images/scb/ken-hinojales.png"
                alt="Ken Ryle Hinojales"
                width={657}
                height={430}
                className="w-full h-auto object-contain"
                priority
                quality={100}
              />
            </Link>
          </div>

          {/* 3. Philipina Gutierrez */}
          <div className="w-full max-w-[400px] lg:max-w-[588px]">
            <Link href={"/offices/osg"} className='w-full'>
              <Image
                src="/images/scb/philipina-gutierrez.png"
                alt="Philipina Gutierrez"
                width={657}
                height={430}
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

          {/* 4. Mickyla Loriene Almadin */}
          <div className="w-full max-w-[400px] lg:max-w-[588px]">
            <Link href={"/offices/ost"} className='w-full'>
              <Image
                src="/images/scb/mickyla-almadin.png"
                alt="Mickyla Loriene Almadin"
                width={657}
                height={430}
                className="w-full h-auto object-contain"
              />
            </Link>
          </div>

        </div>
      </div>

      <ProfileGroup 
        groupTitle='CLUSTER REPRESENTATIVES' 
        description='The Cluster Representatives are the voice of the student body from their respective schools and clusters.'
      >
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