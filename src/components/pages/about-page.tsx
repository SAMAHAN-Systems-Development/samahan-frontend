import React from "react";
import Image from "next/image";
import HeroBanner from "../ui/hero-banner";

function AboutPage() {
  return (
    <div className="relative -mt-22 flex min-h-screen flex-col overflow-hidden bg-white">
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

      {/* <div className="pointer-events-none absolute right-0 bottom-0 left-0 z-0 h-[1500px] w-full overflow-hidden">
        <div className="absolute bottom-120 -left-25 h-[310px] w-[132px] rotate-25 md:bottom-[400px] lg:bottom-[200px] lg:h-[697px] lg:w-[296px] 2xl:bottom-[-80px] 2xl:h-[996px] 2xl:w-[423px]">
          <Image
            src="/images/h-curvy-lines.png"
            alt="Decorative element"
            fill
            className="object-cover"
          />
        </div>

        <div className="absolute -right-0 -bottom-16 h-[315px] w-[169px] overflow-x-hidden lg:bottom-[-100px] lg:h-[706px] lg:w-[378px] 2xl:bottom-[-200px] 2xl:h-[1008px] 2xl:w-[540px]">
          <Image
            src="/images/n-curvy-lines.png"
            alt="Decorative element"
            width="973"
            height="1293"
            className="object-cover"
          />
        </div>
      </div> */}

      <HeroBanner
        imageSrc="/images/hero-images/ABOUT-Hero.png"
        imageAlt="About Page Hero"
        header1="SAMAHAN"
        header2="ABOUT"
      />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mt-14 flex h-44 w-44 items-center justify-center xs:h-52 xs:w-52 lg:mt-22 lg:h-64 lg:w-64 2xl:mt-36 2xl:h-86 2xl:w-86">
          <Image
            src="/images/samahan-logo.png"
            alt="Samahan Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="font-formular-medium mt-6 w-3/4 text-center text-xs text-mainblue xs:text-sm lg:mt-8 lg:w-5/7 lg:text-lg lg:leading-tight lg:uppercase 2xl:mt-12 2xl:w-4/7 2xl:text-2xl">
          The Samahan ng Mga Mag-Aaral ng Pamantasang Ateneo de Davao, or
          SAMAHAN, is the lone autonomous Student Government of the College unit
          of Ateneo de Davao University.
        </div>

        <div className="mt-20 flex w-3/4 flex-col items-center md:mt-24 md:items-start lg:mt-36 2xl:mt-44">
          <div className="relative flex h-16 w-48 items-center justify-center xs:h-20 xs:w-52 lg:h-28 lg:w-72 2xl:h-36 2xl:w-96">
            <Image
              src="/images/on-the-move-logo-blue.png"
              alt="Samahan Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="font-formular-black mt-2.5 text-2xl text-mainblue xs:text-3xl lg:text-[40px] 2xl:mt-5 2xl:text-6xl">
            THE BRANDING
          </div>

          <div className="font-formular-regular mt-7 flex flex-col gap-y-3.5 text-justify text-sm text-mainblue lg:mt-10 lg:gap-y-6 lg:text-base 2xl:text-lg">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a
              ullamcorper sapien. Pellentesque tristique porttitor feugiat.
              Nulla placerat vestibulum velit ac tempor. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Donec efficitur, velit non
              placerat lacinia, odio odio consequat nunc, at auctor lectus velit
              sit amet felis. Integer ornare felis mi, a tempus nisl semper in.
            </div>
            <div>
              Etiam nec nulla accumsan, egestas nisl a, iaculis sem. Quisque
              lobortis venenatis urna, nec dictum mi pulvinar a. Nulla
              condimentum vulputate condimentum. Sed venenatis dignissim nulla
              in euismod. Phasellus arcu tellus, sagittis vitae ex tempus,
              luctus tempor ex. Sed dapibus felis elit, id posuere est porta id.
              Donec convallis nulla at diam mollis, non convallis libero
              pharetra. Vestibulum eu urna non erat vehicula venenatis.
              Curabitur ut venenatis erat. Nullam fermentum dui id felis maximus
              fermentum.
            </div>
            <div>
              Sed lectus dolor, iaculis tempus convallis eu, blandit vel mi.
              Maecenas tempus massa a mauris sollicitudin accumsan sit amet quis
              sapien. Maecenas aliquam dolor in libero porta, ornare blandit
              justo elementum. Nullam suscipit purus sed cursus ultrices. Mauris
              cursus nibh nisl, quis semper nisl hendrerit eu. Aenean id
              ullamcorper tortor. Curabitur sed sapien quis ante malesuada
              auctor id dignissim ipsum. Nullam non ipsum tempor, luctus est id,
              lobortis sapien. Duis rutrum dui nec lobortis auctor.
            </div>
            <div>
              Donec eget cursus massa. Mauris nec tincidunt ex. Etiam eu lectus
              dapibus, faucibus mauris eget, maximus leo. Morbi fermentum ut
              lorem ut ultricies. Sed quis lectus pretium, porttitor purus ut,
              lacinia tortor. Sed vel magna at mauris vestibulum ultrices vel id
              turpis. Proin volutpat lacinia arcu sit amet dictum. Etiam non
              arcu ligula. Pellentesque dictum porttitor nulla nec lobortis. Sed
              tincidunt pretium pharetra. Fusce elementum molestie rutrum.
              Vestibulum porttitor libero non augue facilisis posuere.
            </div>
          </div>

          <div className="mt-20 mb-28 flex w-full justify-center text-mainblue lg:mt-44 lg:mb-60 2xl:mt-60">
            <div className="flex w-full flex-col items-center justify-center lg:w-6/7 2xl:w-5/7">
              <div className="font-trapix text-[26px] xs:text-[32px] lg:text-4xl lg:uppercase 2xl:text-5xl">
                Organizational Chart
              </div>
              <div className="font-formular-medium mt-2 text-center text-xs lg:mt-6 lg:text-lg 2xl:mt-11 2xl:text-xl">
                See how the departments work together to support overall
                operations. Click the button below to download the full
                organizational chart for a clear view of the department
                structure.
              </div>
              <div className="mt-7 h-min w-full rounded-3xl bg-mainblue px-7 py-4 xs:w-max lg:mt-10">
                <a
                  href="/documents/SAMAHAN-On-The-Move-Organizational-Chart.pdf"
                  download="SAMAHAN-On-The-Move-Organizational-Chart.pdf"
                  className="font-formular-mono flex items-center justify-center gap-x-5 text-lg text-white xs:text-xl"
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
