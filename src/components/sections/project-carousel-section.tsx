import ProjectCarousel from "../ui/project-carousel";
import { presidentProjects } from "@/data/projects-carousel-data";
export default function ProjectCarouselSection() {
  return (
    <section className="flex justify-center flex-col justify-self-center">
      <h1 className="font-formular-black text-center text-2xl uppercase text-mainblue md:text-3xl lg:text-4xl mb-8 lg:mb-6 px-4">
        ACHIEVEMENTS AND PROJECTS
      </h1>
      <ProjectCarousel projects={presidentProjects} />
    </section>
  );
}
