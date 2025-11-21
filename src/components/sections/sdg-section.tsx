import { sdgData } from "@/data/sdg-card-data";
import SDGCard from "../ui/SDGCard";

export default function SDGSection() {
  const sdgCard16 = sdgData[15];
  const sdgCard17 = sdgData[16];

  const getResponsiveColor = (index: number) => {
    // --- Mobile Logic (2 Columns) ---
    let mobileClass = "bg-mainblue";
    
    // Check pattern for indices > 0
    if (index > 0) {
      const pairIndex = Math.floor((index - 1) / 2);
      // Even pairs (0, 2...) are Blue1 on mobile
      if (pairIndex % 2 === 0) mobileClass = "bg-blue1";
    }

    // --- Desktop Logic (3+ Columns) ---
    const desktopClass = index % 2 === 0 ? "lg:bg-mainblue" : "lg:bg-blue1";

    return `${mobileClass} ${desktopClass}`;
  };

  return (
    <section className="my-20 flex w-full flex-col px-4 xs:w-80 md:mt-12 md:w-121 lg:my-40 lg:w-209 xl:my-60 xl:w-295">
      <h1 className="font-formular-black text-center text-xl leading-none text-mainblue md:text-3xl lg:text-4xl xl:text-6xl">
        UNITED NATIONS
      </h1>
      <p className="font-trapix mt-1 text-center text-lg leading-none text-mainblue md:text-2xl lg:mt-2 lg:text-3xl xl:text-5xl">
        SUSTAINABLE DEVELOPMENT GOALS
      </p>
      
      <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 lg:mt-10 lg:grid-cols-3 xl:grid-cols-5">
        
        {/* CARDS 1-15 */}
        {sdgData.slice(0, 15).map((card, index) => (
          <SDGCard 
            key={card.cardNumber} 
            {...card} 
            // Apply the combined logic function
            cardColor={getResponsiveColor(index)}
          />
        ))}

        {/* ============ MOBILE ONLY WRAPPERS (Cards 16 & 17) ============ */}
        
        <div className="lg:hidden">
          <SDGCard 
            {...sdgCard16} 
            // Index 15 -> Pair 7 (Odd) -> Mobile: MainBlue
            cardColor="bg-mainblue" 
          />
        </div>

        <div className="col-span-2 flex justify-center lg:hidden">
          <SDGCard 
            {...sdgCard17} 
            // Index 16 -> Mobile Override: Blue1 (as per previous request)
            cardColor="bg-blue1" 
          />
        </div>

        {/* ============ DESKTOP ONLY WRAPPER (Cards 16 & 17) ============ */}
            
        <div className="hidden justify-center gap-x-3 lg:col-span-3 lg:flex xl:col-span-5">
          <SDGCard 
            {...sdgCard16} 
            // Index 15 (Odd) -> Desktop: Blue1
            cardColor="bg-blue1"
          />
          <SDGCard 
            {...sdgCard17} 
            // Index 16 (Even) -> Desktop: MainBlue
            cardColor="bg-mainblue"
          />
        </div>

      </div>
    </section>
  );
}