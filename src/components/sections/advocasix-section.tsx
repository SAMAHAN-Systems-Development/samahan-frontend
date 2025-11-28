"use client";

import { useState } from "react";
import { advocasixData, AdvocasixCardData } from "@/data/advocasix-card-data";
import AdvocasixCard from "../ui/advocasix-card";
import AdvocasixModal from "../ui/advocasix-modal";

export default function AdvocasixSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState<AdvocasixCardData | null>(
    null,
  );

  return (
    <>
      <section className="mt-10 md:mt-14 flex w-full flex-col px-8 xxs:w-80 md:w-120 lg:w-204 xl:w-268">
        <h1 className="font-formular-black text-center text-xl text-mainblue md:text-3xl lg:text-4xl xl:text-6xl">
          ADVOCASIX
        </h1>
        <p className="font-formular-regular mt-6 text-justify text-xs text-mainblue md:text-base">
          Guided by its principles as a Jesuit, Filipino, and Mindanaoan
          autonomous student government, the Samahan ng mga Mag-aaral ng
          Pamantasan ng Ateneo de Davao set the goal of championing the
          identified AdvocaSIX for the incoming 6 years that started on 2022 and
          aims to cultivate until 2028. With that, SAMAHAN shall hereby champion
          the following advocacies for the term of 2024-2025:
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-y-8 xl:gap-x-6">
          {advocasixData.map((card) => (
            <div
              key={card.cardTitle}
              onClick={() => {
                setSelectedCard(card);
                setModalOpen(true);
              }}
              className="cursor-pointer"
            >
              <AdvocasixCard cardTitle={card.cardTitle} image={card.image} />
            </div>
          ))}
        </div>
      </section>

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
            imageAlt: selectedCard.image.imgAlt,
          }}
        />
      )}
    </>
  );
}
