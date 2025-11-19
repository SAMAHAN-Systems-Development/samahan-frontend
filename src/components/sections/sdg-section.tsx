import { sdgData } from "@/data/sdg-card-data";
import SDGCard from "../ui/SDGCard";

export default function SDGSection() {
  const sdgCard16 = sdgData[15];
  const sdgCard17 = sdgData[16];

  return (
    <section className="my-20 flex w-full flex-col px-4 xs:w-80 md:mt-12 md:w-121 lg:my-40 lg:w-209 xl:my-60 xl:w-295">
      <h1 className="font-formular-black text-center text-xl leading-none text-mainblue md:text-3xl lg:text-4xl xl:text-6xl">
        UNITED NATIONS
      </h1>
      <p className="font-trapix mt-1 text-center text-lg leading-none text-mainblue md:text-2xl lg:mt-2 lg:text-3xl xl:text-5xl">
        SUSTAINABLE DEVELOPMENT GOALS
      </p>
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 lg:mt-10 lg:grid-cols-3 xl:grid-cols-5">
        {/* Map the first 15 cards */}
        {sdgData.slice(0, 15).map((card) => (
          <SDGCard key={card.cardNumber} {...card} />
        ))}

        {/* Responsive wrappers for the last 2 cards */}

        <div className="lg:hidden">
          <SDGCard {...sdgCard16} />
        </div>
        <div className="col-span-2 flex justify-center lg:hidden">
          <SDGCard {...sdgCard17} />
        </div>
        <div className="hidden justify-center gap-x-3 lg:col-span-3 lg:flex xl:col-span-5">
          <SDGCard {...sdgCard16} />
          <SDGCard {...sdgCard17} />
        </div>
      </div>
    </section>
  );
}
