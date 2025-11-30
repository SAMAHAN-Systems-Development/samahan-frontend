import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryItem {
  id: string;
  imageSrc: string;
}

interface ReportCarouselProps {
  month: string;
  year: number;
  items: GalleryItem[];
}

const ReportCarousel: React.FC<ReportCarouselProps> = ({
  month,
  year,
  items,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const itemsPerPage = isDesktop ? 3 : 1;

  useEffect(() => {
    setCurrentIndex(0);
  }, [isDesktop]);

  useEffect(() => {
    setMounted(true);

    if (isModalOpen && !isDesktop) {
      setIsModalOpen(false);
    }

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, isDesktop]);

  const totalPages = Math.ceil(items.length / itemsPerPage);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < totalPages - 1 ? prev + 1 : prev));
  };

  const openModal = (globalIndex: number) => {
    setModalIndex(globalIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex > 0) {
      setModalIndex(modalIndex - 1);
    }
  };

  const handleModalNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (modalIndex < items.length - 1) {
      setModalIndex(modalIndex + 1);
    }
  };

  if (items.length === 0) return null;

  return (
    <>
      <div className="w-full mb-16">
        {/* --- (Mobile Arrows + Month) --- */}
        <div className="flex items-center justify-center gap-6 mb-8 px-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`lg:hidden p-2 rounded-full bg-mainblue text-white transition-opacity
              ${
                currentIndex === 0
                  ? "opacity-0 cursor-default"
                  : "hover:bg-blue1 cursor-pointer"
              }`}
          >
            <ChevronLeft size={20} />
          </button>

          <h2 className="text-3xl lg:text-6xl font-formular-black text-mainblue text-center uppercase tracking-wider">
            {month}
          </h2>

          <button
            onClick={handleNext}
            disabled={currentIndex >= totalPages - 1}
            className={`lg:hidden p-2 rounded-full bg-mainblue text-white transition-opacity
              ${
                currentIndex >= totalPages - 1
                  ? "opacity-0 cursor-default"
                  : "hover:bg-blue1 cursor-pointer"
              }`}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* --- DESKTOP CAROUSEL --- */}
        <div className="hidden lg:flex items-center justify-center gap-8 max-w-7xl mx-auto px-4">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-shrink-0 items-center justify-center rounded-xl border-none bg-mainblue p-2 text-white shadow-none transition-colors duration-500 hover:bg-blue1 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 flex"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Carousel Container */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIndex * 100}% - ${
                  currentIndex * 1.5
                }rem))`,
              }}
            >
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className="w-[calc(33.333%-1rem)] flex-shrink-0"
                >
                  <div
                    className={`relative w-full aspect-square bg-gray-100 overflow-hidden transition-transform duration-500  ${
                      isDesktop ? "cursor-pointer" : ""
                    }`}
                    onClick={isDesktop ? () => openModal(index) : undefined}
                  >
                    <Image
                      src={item.imageSrc}
                      alt={`Report for ${month}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex >= totalPages - 1}
            className="flex-shrink-0 items-center justify-center rounded-xl border-none bg-mainblue p-2 text-white shadow-none transition-colors duration-500 hover:bg-blue1 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none disabled:opacity-50 flex"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile View - Sliding Carousel */}
        <div className="lg:hidden flex flex-col items-center justify-center w-full px-4">
          <div className="w-full max-w-xl overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {items.map((item, index) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <div className="relative w-full aspect-square bg-gray-100 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={`Report for ${month}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- EXPANDED MODAL VIEW --- */}
      {mounted &&
        isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-in  duration-500 backdrop-blur-sm bg-mainblue/75"
            onClick={closeModal}
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white/80 hover:text-white hover:bg-white/10 p-2 rounded-full transition-colors z-50 cursor-pointer"
            >
              <X size={32} />
            </button>

            <div
              className="relative w-full h-full flex items-center justify-center max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleModalPrev}
                disabled={modalIndex === 0}
                className={`absolute left-0 lg:left-4 z-50 p-2 text-mainblue bg-white rounded-xl 
                ${
                  modalIndex === 0
                    ? "hidden"
                    : "hover:bg-white/80 rounded-full cursor-pointer"
                }`}
              >
                <ChevronLeft size={24} className="w-10 h-10 lg:w-12 lg:h-12" />
              </button>

              <div className="relative w-full h-auto max-h-[85vh] aspect-square lg:aspect-auto lg:h-full flex items-center justify-center pointer-events-none select-none">
                <Image
                  src={items[modalIndex].imageSrc}
                  alt={`Expanded View ${modalIndex + 1}`}
                  width={1200}
                  height={1200}
                  className="object-contain max-h-[85vh] max-w-full w-auto h-auto rounded-lg shadow-2xl"
                  priority
                />
              </div>

              <button
                onClick={handleModalNext}
                disabled={modalIndex === items.length - 1}
                className={`absolute right-0 lg:right-4 z-50 p-2 text-mainblue bg-white rounded-xl transition-all 
                ${
                  modalIndex === items.length - 1
                    ? "hidden"
                    : "hover:bg-white/80 rounded-full cursor-pointer"
                }`}
              >
                <ChevronRight size={24} className="w-10 h-10 lg:w-12 lg:h-12" />
              </button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 text-sm font-medium tracking-widest bg-black/20 px-4 py-1 rounded-full backdrop-blur-sm">
              {modalIndex + 1} / {items.length}
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default ReportCarousel;
