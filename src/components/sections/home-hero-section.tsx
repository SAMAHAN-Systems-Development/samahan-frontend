"use client";

import Image from "next/image";
import Waveform from "../svg/Waveform";

export default function HomeHeroSection() {
  return (
    <>
      <section className="relative flex h-fit w-full flex-col items-center overflow-hidden">
        <div className="relative flex h-svh max-h-256 min-h-160 w-full items-center justify-center">
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
          <div className="relative flex w-full flex-col items-center">
            <Image
              className="w-full max-w-80 px-4 md:max-w-110 lg:max-w-150"
              src="/images/on-the-move-logo.png"
              width={999}
              height={344}
              alt="on the move logo"
            />
            <p className="font-formular-black mt-2 text-center text-[.5rem] text-white md:text-xs lg:text-base">
              SAMAHAN NG MGA MAG-AARAL NG PAMANTASANG ATENEO DE DAVAO
            </p>
            <p className="font-formular-mono mt-1 w-60 text-center text-[.5rem] text-white md:w-full lg:text-xs">
              The Student Government of the College Unit of Ateneo de Davao
              University
            </p>
            <Waveform className="absolute -bottom-45 -left-65 md:bottom-5 md:-left-90 lg:bottom-20 lg:-left-120 xl:bottom-15 xl:-left-145" />
            <Waveform
              className="absolute -right-65 bottom-30 md:-right-80 lg:-right-105 lg:bottom-45 xl:-right-130 xl:bottom-50"
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
          <Waveform className="absolute bottom-5 -left-62 w-100 rotate-40 md:bottom-20 md:-left-95 lg:bottom-35 lg:-left-125 xl:bottom-52 xl:-left-155 2xl:bottom-63" />
          <Waveform
            className="absolute -right-75 -bottom-17 z-10 w-100 md:-right-110 md:-bottom-15 lg:-right-140 lg:-bottom-10 xl:-right-175 xl:-bottom-5 2xl:bottom-5"
            reverse={1}
          />
        </div>
      </section>
    </>
  );
}
