import Link from "next/link";
import Image from "next/image";

interface OfficeCardProps {
  imageUrl?: string;
  officeName: string;
  href?: string;
}

export default function OfficeCard({
  imageUrl = "/images/placeholder.png",
  officeName,
  href = "/",
}: OfficeCardProps) {
  return (
    <Link href={href} className="block group w-60 md:w-64 lg:w-68">
      <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-mainblue">
        <div className="relative h-20 md:h-24 lg:h-28">
          <Image
            src={imageUrl}
            alt={officeName}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-mainblue/50 bg-opacity-60"></div>
        </div>

        <div className="bg-mainblue px-3 py-2">
          <h3 className="text-white pt-0.5 font-trapix text-md text-center">
            {officeName}
          </h3>
        </div>
      </div>
    </Link>
  );
}
