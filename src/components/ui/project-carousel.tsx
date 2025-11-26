"use client";
import { PropsWithChildren, useState } from "react";
import { Project } from "@/lib/types/project";
import ProjectCard from "../ui/ProjectCard";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

type ProjectCarouselProps = PropsWithChildren<{
  projects?: Project[];
}>;

export default function ProjectCarousel({
  projects,
  children,
}: ProjectCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);

  if (!projects || projects.length === 0) {
    return children ? (
      <section className="space-y-6">{children}</section>
    ) : null;
  }

  // Ensures the total number of cards per pagination is strictly 3
  const CARDS_PER_PAGE = 3;
  const totalCards = projects.length;

  // Calculates the total pages displayed per pagination dot, total projects / cards per page
  const totalPages = Math.ceil(totalCards / CARDS_PER_PAGE);

  // Get cards for current page - show remainder as-is on last page
  const getCurrentPageCards = () => {
    const startIndex = currentPage * CARDS_PER_PAGE;
    const endIndex = Math.min(startIndex + CARDS_PER_PAGE, totalCards);
    return projects.slice(startIndex, endIndex);
  };

  const visibleCards = getCurrentPageCards();
  const canGoPrev = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (canGoNext) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <section className="relative w-full py-8 overflow-hidden">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center justify-center gap-8 max-w-7xl mx-auto px-4">
        {/* Left Navigation Button */}
        <button
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="flex-shrink-0 items-center justify-center rounded-none border-none bg-transparent p-0 text-mainblue shadow-none transition-colors duration-300 hover:text-mainblue/70 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none flex"
          aria-label="Previous slide"
        >
          <BsFillCaretLeftFill className="h-12 w-12" />
        </button>

        {/* Carousel Container */}
        <div className="flex-1 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${currentPage * 100}% - ${
                currentPage * 1.5
              }rem))`,
            }}
          >
            {projects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
                className="w-[calc(33.333%-1rem)] flex-shrink-0"
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={handleNext}
          disabled={!canGoNext}
          className="flex-shrink-0 items-center justify-center rounded-none border-none bg-transparent p-0 text-mainblue shadow-none transition-colors duration-300 hover:text-mainblue/70 focus-visible:outline-none focus-visible:ring-0 disabled:pointer-events-none flex"
          aria-label="Next slide"
        >
          <BsFillCaretRightFill className="h-12 w-12" />
        </button>
      </div>

      {/* Mobile/Tablet View - Stacked Cards Centered - Show All Projects */}
      <div className="lg:hidden flex flex-col items-center justify-center w-full space-y-6 px-4">
        {projects.map((project, index) => (
          <div key={`${project.title}-${index}`} className="w-full max-w-xl">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {/* Pagination Dots - Only show on desktop */}
      <div className="hidden lg:flex absolute bottom-1 left-1/2 -translate-x-1/2 justify-center gap-3">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === currentPage
                ? "bg-mainblue scale-110"
                : "bg-slate-400 hover:bg-slate-500"
            }`}
            onClick={() => setCurrentPage(index)}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
