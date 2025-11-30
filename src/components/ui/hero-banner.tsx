import Image from "next/image";
import React from "react";

interface HeroBannerProps {
  imageSrc: string;
  imageAlt: string;
  header1?: string;
  header2?: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  imageSrc,
  imageAlt,
  header1,
  header2,
}) => (
  <div className="xs:h-64 relative z-10 h-56 w-full md:h-72 lg:h-96 2xl:h-[600px]">
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      quality={100}
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-2">
      {header1 && (
        <div>
          <span className="font-formular-black xs:text-xl text-lg text-white lg:text-4xl 2xl:text-6xl">
            {header1}
          </span>
        </div>
      )}
      {header2 && (
        <div>
          <span className="font-trapix xs:text-2xl text-xl text-white lg:text-5xl 2xl:text-7xl">
            {header2}
          </span>
        </div>
      )}
    </div>
  </div>
);

export default HeroBanner;
