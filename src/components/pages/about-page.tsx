import React from 'react'
import Image from "next/image";
import HeroBanner from '../ui/hero-banner';

function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen relative bg-white">
      
      {/* ================= TOP LINES ================= */}
      <div className="relative z-0">
        <div className="absolute left-0 top-[150px] md:top-[240px] lg:top-[300px] 2xl:top-[600px] w-[154px] h-[311px] lg:w-[346px] lg:h-[699px] 2xl:w-[494px] 2xl:h-[998px] pointer-events-none">
          <Image
            src="/images/s-curvy-lines.png"
            alt="Decorative element"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute right-0 top-[600px] md:top-[640px] lg:top-[820px] 2xl:top-[1000px] w-[127px] h-[240px] lg:w-[284px] lg:h-[538px] 2xl:w-[406px] 2xl:h-[769px] pointer-events-none">
          <Image
            src="/images/m-curvy-lines.png"
            alt="Decorative element"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* ================= BOTTOM LINES ================= */}
      <div className="absolute bottom-0 left-0 right-0 h-[1500px] w-full z-0 pointer-events-none overflow-hidden">
         <div className="absolute left-0 bottom-[500px] md:bottom-[400px] lg:bottom-[200px] 2xl:bottom-[-80px] w-[132px] h-[310px] lg:w-[296px] lg:h-[697px] 2xl:w-[423px] 2xl:h-[996px]">
            <Image
              src="/images/h-curvy-lines.png"
              alt="Decorative element"
              fill
              className="object-cover"
            />
         </div>

         <div className="absolute right-[-30px] bottom-[80px] lg:bottom-[-100px] 2xl:bottom-[-200px] w-[169px] h-[315px] lg:w-[378px] lg:h-[706px] 2xl:w-[540px] 2xl:h-[1008px]">
            <Image
              src="/images/n-curvy-lines.png"
              alt="Decorative element"
              fill
              className="object-cover"
            />
         </div>
      </div>


      <HeroBanner
        imageSrc="/images/hero-images/ABOUT-Hero.png"
        imageAlt="About Page Hero"
        header1='SAMAHAN'
        header2="ABOUT"
      />

      {/* Content Wrapper */}
      <div className='flex flex-col items-center relative z-10'>
        <div className="w-44 h-44 xs:w-52 xs:h-52 lg:w-64 lg:h-64 2xl:w-86 2xl:h-86 mt-14 lg:mt-22 2xl:mt-36 relative flex justify-center items-center">
          <Image
            src="/images/samahan-logo.png"
            alt="Samahan Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className='font-formular-medium lg:uppercase w-3/4 lg:w-5/7 2xl:w-4/7 text-xs xs:text-sm lg:text-lg lg:leading-tight 2xl:text-2xl text-mainblue text-center mt-6 lg:mt-8 2xl:mt-12'>
            The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or SAMAHAN, is the lone autonomous Student Government of the College unit of Ateneo de Davao University.
        </div>

        <div className='flex flex-col w-3/4 mt-20 md:mt-24 lg:mt-36 2xl:mt-44 items-center md:items-start'>
            <div className="w-48 h-16 xs:w-52 xs:h-20 lg:w-72 lg:h-28 2xl:w-96 2xl:h-36 relative flex justify-center items-center">
              <Image
                src="/images/on-the-move-logo-blue.png"
                alt="Samahan Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className='font-formular-black text-2xl xs:text-3xl lg:text-[40px] 2xl:text-6xl text-mainblue mt-2.5 2xl:mt-5'>
              THE BRANDING
            </div>

          <div className='mt-7 lg:mt-10 flex flex-col gap-y-3.5 lg:gap-y-6 text-justify text-sm lg:text-base 2xl:text-lg font-formular-regular text-mainblue'>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a ullamcorper sapien. Pellentesque tristique porttitor feugiat. Nulla placerat vestibulum velit ac tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur, velit non placerat lacinia, odio odio consequat nunc, at auctor lectus velit sit amet felis. Integer ornare felis mi, a tempus nisl semper in. 
            </div>
            <div>
              Etiam nec nulla accumsan, egestas nisl a, iaculis sem. Quisque lobortis venenatis urna, nec dictum mi pulvinar a. Nulla condimentum vulputate condimentum. Sed venenatis dignissim nulla in euismod. Phasellus arcu tellus, sagittis vitae ex tempus, luctus tempor ex. Sed dapibus felis elit, id posuere est porta id. Donec convallis nulla at diam mollis, non convallis libero pharetra. Vestibulum eu urna non erat vehicula venenatis. Curabitur ut venenatis erat. Nullam fermentum dui id felis maximus fermentum. 
            </div>
            <div>
              Sed lectus dolor, iaculis tempus convallis eu, blandit vel mi. Maecenas tempus massa a mauris sollicitudin accumsan sit amet quis sapien. Maecenas aliquam dolor in libero porta, ornare blandit justo elementum. Nullam suscipit purus sed cursus ultrices. Mauris cursus nibh nisl, quis semper nisl hendrerit eu. Aenean id ullamcorper tortor. Curabitur sed sapien quis ante malesuada auctor id dignissim ipsum. Nullam non ipsum tempor, luctus est id, lobortis sapien. Duis rutrum dui nec lobortis auctor. 
            </div>
            <div>
              Donec eget cursus massa. Mauris nec tincidunt ex. Etiam eu lectus dapibus, faucibus mauris eget, maximus leo. Morbi fermentum ut lorem ut ultricies. Sed quis lectus pretium, porttitor purus ut, lacinia tortor. Sed vel magna at mauris vestibulum ultrices vel id turpis. Proin volutpat lacinia arcu sit amet dictum. Etiam non arcu ligula. Pellentesque dictum porttitor nulla nec lobortis. Sed tincidunt pretium pharetra. Fusce elementum molestie rutrum. Vestibulum porttitor libero non augue facilisis posuere.
            </div>
          </div>

          <div className='w-full flex justify-center mt-20 lg:mt-44 2xl:mt-60 text-mainblue mb-28 lg:mb-60'>
            <div className='flex flex-col items-center w-full lg:w-6/7 2xl:w-5/7 justify-center'>
              <div className='font-trapix text-[26px] xs:text-[32px] lg:text-4xl 2xl:text-5xl lg:uppercase'>
                Organizational Chart
              </div>
              <div className='font-formular-medium text-xs lg:text-lg 2xl:text-xl text-center mt-2 lg:mt-6 2xl:mt-11'>
                See how the departments work together to support overall operations. Click the button below to download the full organizational chart for a clear view of the department structure.
              </div>
              <div className='rounded-3xl bg-mainblue w-full xs:w-max h-min py-4 px-7 mt-7 lg:mt-10'>
                <a 
                  href="/documents/SAMAHAN-On-The-Move-Organizational-Chart.pdf" 
                  download="SAMAHAN-On-The-Move-Organizational-Chart.pdf" 
                  className='text-white flex justify-center items-center gap-x-5 font-formular-mono text-lg xs:text-xl'
                >
                  <div className='w-3 h-3 bg-[#D9D9D9] hidden lg:block'></div>
                    DOWNLOAD CHART
                  <div className='w-3 h-3 bg-[#D9D9D9] hidden lg:block'></div>
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default AboutPage