import Image from "next/image";
import Link from "next/link";
import { trapix, formularRegular } from "@/app/font";

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
  return (
    <div className="w-full h-auto rounded-2xl overflow-hidden bg-gradient-to-b from-mainblue from-60% to-blue2 flex flex-col">
      <div className="relative w-full h-48 sm:h-56 lg:h-60">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>

      <div className="pt-6 lg:pt-8 px-6 lg:px-4 pb-6 flex flex-col gap-4 flex-grow">
        <h3
          className={`${trapix.className} text-2xl lg:text-3xl text-white uppercase`}
        >
          {title}
        </h3>
        <p
          className={`${formularRegular.className} text-sm text-white line-clamp-3 lg:line-clamp-none overflow-hidden`}
        >
          {description}
        </p>

        <Link
          href={url}
          className={`${formularRegular.className} font-normal mt-2 inline-block self-center rounded-full border border-white px-4 lg:px-6 py-2 text-xs lg:text-sm text-white transition-colors hover:bg-white hover:text-mainblue`}
        >
          View More ▸
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
