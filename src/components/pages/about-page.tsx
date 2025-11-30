import Image from "next/image";
import HeroBanner from "../ui/hero-banner";

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
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* ================= TOP LINES ================= */}
      <Image
        className="absolute top-60 -left-28 max-w-60 min-w-60 object-cover md:top-90 md:-left-40 md:max-w-80 md:min-w-80 lg:top-116 lg:-left-40 lg:max-w-100 lg:min-w-100 xl:-left-35 xl:max-w-110 xl:min-w-110 2xl:top-180 2xl:max-w-140 2xl:min-w-140"
        src="/images/s-curvy-lines.png"
        width={960}
        height={1298}
        alt="Decorative element"
      />
      <Image
        className="absolute top-130 -right-65 h-auto max-w-85 min-w-85 object-cover md:top-136 md:-right-30 md:max-w-80 md:min-w-80 lg:top-184 lg:-right-30 lg:max-w-100 lg:min-w-100 xl:top-178 xl:max-w-110 xl:min-w-110 2xl:top-270 2xl:-right-20 2xl:max-w-140 2xl:min-w-140"
        src="/images/m-curvy-lines.png"
        width={995}
        height={1072}
        alt="Decorative element"
      />

      {/* ================= BOTTOM LINES ================= */}
      <Image
        className="absolute bottom-125 -left-36 max-w-45 min-w-45 rotate-30 object-cover md:bottom-0 md:-left-38 md:max-w-65 md:min-w-65 md:rotate-0 lg:-bottom-6 lg:-left-24 lg:max-w-80 lg:min-w-80 xl:-bottom-10 xl:-left-36 xl:max-w-100 xl:min-w-100 2xl:-bottom-18 2xl:max-w-120 2xl:min-w-120"
        src="/images/h-curvy-lines.png"
        alt="Decorative element"
        width={958}
        height={1657}
      />
      <Image
        className="absolute -right-30 -bottom-20 max-w-70 min-w-70 -rotate-30 object-cover md:-right-10 md:-bottom-16 md:rotate-0 lg:-right-20 lg:-bottom-40 lg:max-w-130 lg:min-w-130 xl:max-w-140 xl:min-w-140 2xl:-bottom-30 2xl:max-w-160 2xl:min-w-160"
        src="/images/n-curvy-lines.png"
        alt="Decorative element"
        width={973}
        height={1293}
      />

      <HeroBanner
        imageSrc="/images/hero-images/ABOUT-Hero.png"
        imageAlt="About Page Hero"
        header1="SAMAHAN"
        header2="ABOUT"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="xs:h-52 xs:w-52 relative mt-14 flex h-44 w-44 items-center justify-center lg:mt-22 lg:h-64 lg:w-64 2xl:mt-36 2xl:h-86 2xl:w-86">
          <Image
            src="/images/samahan-logo.png"
            alt="Samahan Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="font-formular-medium text-mainblue xs:text-sm mt-6 w-3/4 text-center text-xs lg:mt-8 lg:w-5/7 lg:text-lg lg:leading-tight lg:uppercase 2xl:mt-12 2xl:w-4/7 2xl:text-2xl">
          The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College unit
          of Ateneo de Davao University.
        </div>

        <div className="mt-20 flex w-3/4 flex-col items-center md:mt-24 md:items-start lg:mt-36 2xl:mt-44">
          <div className="xs:h-20 xs:w-52 relative flex h-16 w-48 items-center justify-center lg:h-28 lg:w-72 2xl:h-36 2xl:w-96">
            <Image
              src="/images/on-the-move-logo-blue.png"
              alt="Samahan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="font-formular-black text-mainblue xs:text-3xl mt-2.5 text-2xl lg:text-[40px] 2xl:mt-5 2xl:text-6xl">
            THE BRANDING
          </div>

          <div className="font-formular-regular text-mainblue mt-7 flex flex-col gap-y-3.5 text-justify text-sm lg:mt-10 lg:gap-y-6 lg:text-base 2xl:text-lg">
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

          <div className="text-mainblue mt-20 mb-28 flex w-full justify-center lg:mt-44 lg:mb-60 2xl:mt-60">
            <div className="flex w-full flex-col items-center justify-center lg:w-6/7 2xl:w-5/7">
              <div className="font-trapix xs:text-[32px] text-[26px] lg:text-4xl lg:uppercase 2xl:text-5xl">
                Organizational Chart
              </div>
              <div className="font-formular-medium mt-2 text-center text-xs lg:mt-6 lg:text-lg 2xl:mt-11 2xl:text-xl">
                See how the departments work together to support overall
                operations. Click the button below to download the full
                organizational chart for a clear view of the department
                structure.
              </div>
              <div className="bg-mainblue xs:w-max mt-7 h-min w-full rounded-3xl px-7 py-4 lg:mt-10">
                <a
                  href="/documents/SAMAHAN-On-The-Move-Organizational-Chart.pdf"
                  download="SAMAHAN-On-The-Move-Organizational-Chart.pdf"
                  className="font-formular-mono xs:text-xl flex items-center justify-center gap-x-5 text-lg text-white"
                >
                  <div className="hidden h-3 w-3 bg-[#D9D9D9] lg:block"></div>
                  DOWNLOAD CHART
                  <div className="hidden h-3 w-3 bg-[#D9D9D9] lg:block"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
