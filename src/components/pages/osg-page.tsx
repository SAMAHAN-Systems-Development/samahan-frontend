import React from 'react'
import HeroBanner from '../ui/hero-banner';
import OtherOffices from '../sections/other-offices';
import ProfileCard from '../ui/profile-card';
import ProfileGroup from '../sections/profile-group';
import ProjectCarouselSection from '../sections/project-carousel-section';

function OSGPage() {
  return (
    <div className="flex flex-col min-h-screen relative ">
      <HeroBanner
        imageSrc="/images/hero-images/OSG-Hero.png"
        imageAlt="OSG Page Hero"
        header1="OFFICE OF THE"
        header2="SECRETARY-GENERAL"
      />

      <ProfileGroup 
        groupTitle='OFFICE OF THE SAMAHAN SECRETARY-GENERAL' 
        description='Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">
          
          <div className="col-span-2 lg:col-start-3 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/philipina-gutierrez.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-start-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/nicole-adolfo.png',
                imageAlt: 'Profile Picture'
              }}
              variant='taller'
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/craig-alonzo.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/jerome-balboa.png',
                imageAlt: 'Profile Picture'
              }}
              variant='taller'
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN COMMUNICATIONS' 
        description='Housed in the Office of the Secretary General, SAMAHAN Communications serves as the public affairs and information arm of SAMAHAN. The department is entrusted with chronicling moments that shape student life and carrying messages that matter—with clarity and intent. It also takes charge of secretariat duties, such as written documentation and the dissemination of information across various social media platforms. In addition, it manages SAMAHAN’s digital spaces and crafts student-facing messaging that inclusively reaches the student body and sparks points of action toward a well-informed Atenean community.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/henry-velez.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/kent-empedrad.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='ATENEO SAMAHAN PRODUCTIONS' 
        description='The Ateneo SAMAHAN Productions, under the Office of the Secretary-General, is the premier event productions department of the SAMAHAN and Ateneo de Davao University. It is responsible for strategically planning and managing any SAMAHAN-led activities or events, such as festivals, competitions, conferences, and workshops, among others. It is handled and supported by the department&apos;s four committees: Advance Planning, Designs and Logistics, Talents, and Technical.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/ma-rosal.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/demme-taypin.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN CREATIVE TEAM' 
        description='Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam ibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/ivan-labra.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/aliah-tambuco.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN RESEARCH AND DEVELOPMENT' 
        description='The SAMAHAN Research and Development Department, under the Office of the SAMAHAN Secretary-General, commits to delivering truthful, unbiased, and accurate information through ethical research and data-driven processes. Guided by integrity and service, it strives to inform and engage students in producing outcomes that uphold student welfare and strengthen organizational efforts across the multi-sectoral Ateneo student body.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/arabella-mejorada.png',
                imageAlt: 'Profile Picture'
              }}
              variant='taller'
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/nica-dable.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProfileGroup 
        groupTitle='SAMAHAN SYSTEMS DEVELOPMENT' 
        description='SAMAHAN Systems Development is in charge of designing and developing software and digital systems to make SAMAHAN more efficient through technology. Our goal is to use technology for positive community impact.'
      >
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-x-4 gap-y-12 lg:gap-x-10 justify-items-center">

          <div className="col-span-1 lg:col-start-2 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/ron-dulhao.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

          <div className="col-span-1 lg:col-span-2">
            <ProfileCard 
              image={{
                imageUrl: '/images/osg/joyce-hondos.png',
                imageAlt: 'Profile Picture'
              }}
            />
          </div>

        </div>
      </ProfileGroup>

      <ProjectCarouselSection />
      <div className='h-20'></div>
      <OtherOffices office="osg" />
      <div className='h-20'></div>
    </div>
  )
}

export default OSGPage