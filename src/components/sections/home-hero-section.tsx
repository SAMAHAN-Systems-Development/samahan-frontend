"use client";

import Image from "next/image";
import Waveform from "../svg/Waveform";

export default function HomeHeroSection() {
  return (
    <>
      <section className="relative flex h-fit w-full flex-col items-center overflow-hidden -mt-17 lg:-mt-22">
        <div className="relative flex h-svh xl:h-[110vh] 2xl:h-[120vh] max-h-256 min-h-160 w-full items-center justify-center">
          {/* background picture */}
          <Image
            className="absolute -z-20 h-full w-full object-cover"
            src="/images/home-hero-background.jpg"
            width={2048}
            height={1366}
            alt="home hero background"
          />
          <div className="absolute -z-10 h-full w-full bg-linear-to-t from-mainblue to-mainblue/60" />
          {/* On the move text */}
          <div className="relative flex w-full flex-col items-center md:-mt-20 lg:mt-0 2xl:-mt-25 px-5">
            <Image
              className="w-full max-w-80 px-4 md:max-w-110 lg:max-w-150 2xl:max-w-200"
              src="/images/on-the-move-logo.png"
              width={999}
              height={344}
              alt="on the move logo"
            />
            <p className="font-formular-black mt-4 max-w-100 md:max-w-none lg:mt-4 2xl:mt-6 text-center text-[10px] text-white sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-2xl">
              SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO
            </p>
            <p className="font-formular-mono mt-1 w-60 sm:w-80 text-center text-[10px] text-white sm:text-xs md:w-full lg:text-xs 2xl:text-base">
              The Student Government of the College Unit of Ateneo de Davao
              University
            </p>
            <Waveform className="absolute -bottom-40 -left-100 sm:-bottom-30 sm:-left-90 md:-bottom-40 md:-left-110 lg:bottom-20 lg:-left-165 xl:bottom-5 xl:-left-220 2xl:bottom-20 2xl:-left-200" />
            <Waveform
              className="absolute -right-100 bottom-55 sm:-right-80 sm:bottom-45 md:bottom-45 md:-right-90 lg:-right-155 lg:bottom-45 xl:-right-220 xl:bottom-30 2xl:-right-190 2xl:bottom-50"
              reverse={1}
            />
          </div>
          <Image
            className="absolute bottom-0 w-full xs:hidden"
            width={375}
            height={74}
            src="/images/white-building-wireframe-mirrored-mobile.png"
            alt="white building wireframe mirrored"
          />
          <Image
            className="absolute bottom-0 hidden w-full xs:block"
            width={1920}
            height={355}
            src="/images/white-building-wireframe-mirrored.png"
            alt="white building wireframe mirrored"
          />
        </div>
        <div className="relative max-h-23 w-full bg-linear-to-b from-mainblue from-30% to-white/10 pb-8 md:max-h-30 lg:max-h-40 xl:max-h-50 2xl:max-h-60">
          <Image
            className="w-full origin-center rotate-180 opacity-15 xs:hidden"
            src="/images/white-building-wireframe-mirrored-mobile.png"
            width={375}
            height={74}
            alt="white building wireframe mirrored"
          />
          <Image
            className="hidden w-full origin-center rotate-180 opacity-15 xs:block"
            width={1920}
            height={355}
            src="/images/white-building-wireframe-mirrored.png"
            alt="white building wireframe mirrored"
          />
          <Waveform className="absolute bottom-15 -left-62 sm:bottom-15 sm:-left-55 w-100 rotate-40 md:bottom-35 md:-left-125 lg:bottom-45 lg:-left-155 xl:-left-210 xl:bottom-52 2xl:-left-200 2xl:bottom-55" />
          <Waveform
            className="absolute -right-75 -bottom-10 sm:-right-65 sm:-bottom-8 z-10 w-100 md:-right-135 md:-bottom-10 lg:-right-180 lg:-bottom-10 xl:-right-240 xl:-bottom-20 2xl:-right-220 2xl:-bottom-20"
            reverse={1}
          />
        </div>
      </section>
    </>
  );
}
