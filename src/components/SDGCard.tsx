import Image from "next/image";

interface SDGCardProps {
  cardNumber: number;
  name: string;
  imageUrl?: string;
  cardColor?: string;
}

export default function SDGCard({
  cardNumber,
  name,
  imageUrl,
  cardColor = "bg-mainblue",
}: SDGCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-4 md:p-6 w-56 md:w-64 lg:w-66 h-40 sm:h-44 md:h-48 group cursor-pointer flex flex-col justify-between ${cardColor}`}
    >
      <div className="flex items-center gap-2 sm:gap-3">
        <span className="font-formular-black text-2xl sm:text-3xl md:text-4xl leading-none">
          {cardNumber}.
        </span>
        <h3 className="font-formular-black text-xs sm:text-sm uppercase leading-tight tracking-wide">
          {name}
        </h3>
      </div>

      <div className="flex justify-center">
        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg flex items-center justify-center">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`SDG ${cardNumber}: ${name}`}
              width={80}
              height={80}
              className="object-contain filter brightness-0 invert w-full h-full"
            />
          ) : (
            <span className="text-lg sm:text-xl md:text-2xl font-bold">
              {cardNumber}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
