import { cn } from "@/lib/utils";
import Image from "next/image";

interface SDGCardProps {
  className?: string;
  cardNumber: number;
  name: string;
  imageUrl?: string;
  cardColor?: string;
}

export default function SDGCard({
  className,
  cardNumber,
  name,
  imageUrl,
  cardColor = "bg-mainblue",
}: SDGCardProps) {
  return (
    <div
      className={cn(
        `group relative flex aspect-3/2 w-full flex-col items-center justify-between overflow-hidden rounded-lg px-4 py-2 text-white last:self-center xs:w-35 md:w-55 md:p-4 lg:aspect-5/3 lg:w-65 xl:aspect-5/4 xl:w-55 ${cardColor}`,
        className,
      )}
    >
      <div className="flex w-full flex-row items-center gap-1 md:gap-2">
        <p className="font-formular-black text-sm leading-none md:text-xl lg:text-2xl">
          {cardNumber}.
        </p>
        <p className="font-formular-black text-[.5rem] leading-tight tracking-wide uppercase md:text-xs">
          {name}
        </p>
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`SDG ${cardNumber}: ${name}`}
          width={100}
          height={100}
          className="aspect-square w-10 object-contain brightness-0 invert filter md:w-16 lg:w-18 xl:w-22"
        />
      ) : (
        <span className="text-lg font-bold sm:text-xl md:text-2xl">
          {cardNumber}
        </span>
      )}
    </div>
  );
}
