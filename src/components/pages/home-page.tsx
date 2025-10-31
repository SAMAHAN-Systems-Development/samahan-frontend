'use client';

import { useState } from "react";
import AdvocasixCard from "@/components/ui/advocasix-card";
import AdvocasixModal from "@/components/ui/advocasix-modal";
import SDGCard from "@/components/ui/SDGCard";

import { AdvocasixCardData } from "@/data/advocasix-card-data";
import { SDGCardData } from "@/data/sdg-card-data";

interface HomePageProps {
  advocasixData: AdvocasixCardData[];
  sdgData: SDGCardData[];
}

export default function HomePage({ advocasixData, sdgData }: HomePageProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<AdvocasixCardData | null>(null);

  const sdgCard16 = sdgData[15];
  const sdgCard17 = sdgData[16];

  return (
    <div className="flex flex-col justify-center items-center">

      {/* Advocasix Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-y-10 mb-30">
        {advocasixData.map((card) => (
          <div 
            key={card.cardTitle} 
            onClick={() => { 
              setSelectedCard(card); 
              setModalOpen(true); 
            }} 
            className="cursor-pointer"
          >
            <AdvocasixCard 
              cardTitle={card.cardTitle} 
              image={card.image} 
            />
          </div>
        ))}
      </div>

      {/* Modal for Advocasix Card Details */}
      {selectedCard && (
        <AdvocasixModal
          open={modalOpen}
          onOpenChange={(open) => {
            setModalOpen(open);
            if (!open) setSelectedCard(null);
          }}
          title={selectedCard.cardTitle}
          content={selectedCard.content}
          image={{ 
            imgSource: selectedCard.image.imgSource, 
            imageAlt: selectedCard.image.imgAlt 
          }}
        />
      )}

      {/* SDG Cards Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-y-3 gap-x-3 mb-30">
        
        {/* Map the first 15 cards */}
        {sdgData.slice(0, 15).map((card) => (
          <SDGCard
            key={card.cardNumber}
            {...card}
          />
        ))}

        {/* Responsive wrappers for the last 2 cards */}

        <div className="lg:hidden">
          <SDGCard {...sdgCard16} />
        </div>
        <div className="col-span-2 flex justify-center lg:hidden">
          <SDGCard {...sdgCard17} />
        </div>
        <div className="hidden lg:flex lg:col-span-3 2xl:col-span-5 justify-center gap-x-3">
          <SDGCard {...sdgCard16} />
          <SDGCard {...sdgCard17} />
        </div>
      </div>
    </div>
  );
}