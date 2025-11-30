import React from 'react'
import Image from "next/image";
import HeroBanner from '../ui/hero-banner';

function AboutPage() {
  const emphasisStyle = "font-formular-medium font-medium";

  // Formular is missing glyphs for smart punctuation, so we use Arial as a fallback.
  const RSQUO = <span className="font-['Arial']">&rsquo;</span>;
  const MDASH = <span className="font-['Arial']">&mdash;</span>;
  const COLON = <span className="font-['Arial']">:</span>;
  const SEMICOLON = <span className="font-['Arial']">;</span>;
  const PLUS = <span className="font-['Arial']">+</span>;
  const BOLD_MDASH = <span className="font-['Arial'] font-bold">&mdash;</span>;

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
              In a world where doing more is often mistaken for being more, <strong className={emphasisStyle}><em>it{RSQUO}s easy to just keep going, to chase the next, and to run after whatever lies ahead.</em></strong> And so they say, it takes no force to keep moving, because momentum can carry you even when meaning no longer does. 
            </div>
            <div>
              <strong className={emphasisStyle}><em>But perhaps movement was never meant to be about achieving everything.</em></strong> Not in how far we go, but in <strong className={emphasisStyle}>who we bring with us,</strong> in <strong className={emphasisStyle}>why we started,</strong> and in <strong className={emphasisStyle}>whether the direction still leads us home.</strong>
            </div>
            <div>
              This year, as we journey through this defining moment, we stride together as one <span className="font-formular-bold text-base md:text-lg lg:text-xl">SAMAHAN On the Move</span> {BOLD_MDASH} a community built with the boldest aspirations to bring every Atenean to the farthest of all we can become{COLON} to <strong className={emphasisStyle}>reimagine a system <em>that serves,</em></strong> to <strong className={emphasisStyle}>redefine leadership <em>that listens,</em></strong> and to <strong className={emphasisStyle}>rebuild a future <em>where student governance is truly present, grounded, and relentlessly engaged.</em></strong>
            </div>
            <div>
              As we move to begin this 2025, <strong className={emphasisStyle}>we take the first step in bringing SAMAHAN closer to the Ateneo future we have long been imagining</strong> {MDASH} one that responds to the needs of the present and is intentional in pursuing the changes that truly matter.
            </div>
            <div>
              Stepping in the direction true to our collective ambition, we are on the move as we <strong className={emphasisStyle}>cultivate <em>vibrant student spaces,</em> advance <em>student-centered reforms,</em></strong> and <strong className={emphasisStyle}>champion <em>a student governance that is sustainable, inclusive, and representative.</em></strong>
            </div>
            <div>
              <strong className={emphasisStyle}>Because staying still is to deny the possibility of something more.</strong> Here, we move not just out of necessity, <strong className={emphasisStyle}><em>but from hope that beyond what is, lies what could be.</em></strong> Yet none of this matters if we{RSQUO}re only moving just to say we are. Because in this SAMAHAN, we move with <strong className={emphasisStyle}><em>meaning</em></strong>, with <strong className={emphasisStyle}><em>intention,</em></strong> and above all{COLON}
            </div>
            <div>
              We move with every student who dares to dream louder {MDASH} with our scholars, born from stories of sacrifice and giving back{SEMICOLON} with our student leaders, advocates, and activists who always carry others as they go. 
            </div>
            <div>
              We move with our student-athletes who lead with heart and discipline, with our campus journalists who speak truth when it{RSQUO}s hardest, and with our performers whose passion becomes something greater than themselves. 
            </div>
            <div>
              We move with those who root us in identity and conviction {MDASH} with our Lumad and Moro communities who remind us where we stand, with our Christian and Muslim brothers and sisters whose faith inspires what we believe in, and with our LGBTQ{PLUS} community whose courage teaches us to love louder and stand prouder.
            </div>
            <div>
              And more than anything, we move with every <strong className={emphasisStyle}>Atenean,</strong> whether walking ahead or walking beside, <strong className={emphasisStyle}><em>whose presence powers this movement forward.</em></strong>
            </div>
            <div>
              This is <strong className={emphasisStyle}>SAMAHAN On the Move{MDASH}<em>where every move matters if it is taken with you.</em></strong> Samahan niyo kami sa <strong className={emphasisStyle}>SAMAHAN.</strong> Because this worth moving journey is yours, too.
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