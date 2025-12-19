"use client";
import Image from "next/image";
import { trapix, formularRegular } from "@/app/font";
import { useState } from "react";

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  url: string;
};

const ProjectCard = ({
  imageUrl,
  title,
  description,
  url,
}: ProjectCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`w-full max-w-2xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-b from-mainblue from-60% to-blue2 flex flex-col transition-all duration-300 ${
        isExpanded ? "lg:h-auto" : "lg:h-[700px]"
      }`}
    >
      {/* Image Section */}
      <div className="relative w-full h-60 sm:h-70 lg:h-[400px] flex-shrink-0">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      {/* Content Section */}
      <div className="px-5 md:px-6 lg:px-12 py-5 md:py-6 lg:py-8 flex flex-col gap-3 lg:gap-4 flex-grow justify-center">
        <h3
          className={`${trapix.className} text-lg md:text-2xl lg:text-3xl text-white uppercase`}
        >
          {title}
        </h3>

        {/* Expandable description - Both Mobile & Desktop */}
        <p
          className={` text-sm lg:text-base text-white ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>

        {/* Read More/Less button - Both Mobile & Desktop */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`${formularRegular.className}  cursor-pointer font-normal mt-2 inline-block self-center rounded-full border border-white px-4 py-2 text-xs text-mainblue transition-colors bg-white hover:bg-mainblue hover:text-white`}
        >
          {isExpanded ? "Read Less ▴" : "Read More ▸"}
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
