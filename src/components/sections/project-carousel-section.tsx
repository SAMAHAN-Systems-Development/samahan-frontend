import Image from "next/image";
import ProjectCarousel from "../ui/project-carousel";
import { presidentProjects } from "@/data/projects-carousel-data";

export default function ProjectCarouselSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20 xl:py-22 flex flex-col justify-center">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/2 xl:top-5/9 h-[1000px] w-[260vw] -translate-x-1/2 -translate-y-1/2 sm:h-[900px] sm:w-[220vw] md:h-[650px] md:w-[1600px] lg:h-[750px] lg:w-[2000px] xl:h-[900px] xl:w-[2200px]">
          <Image
          src="/images/tape-design/tape-2.svg"
          alt="Decorative tape design"
          fill
          className="object-contain rotate-0"
          priority
          />
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4">
        <h1 className="font-formular text-mainblue font-black text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-10">
          ACHIEVEMENTS AND PROJECTS
        </h1>
        <ProjectCarousel projects={presidentProjects} />
      </div>
    </section>
  );
}