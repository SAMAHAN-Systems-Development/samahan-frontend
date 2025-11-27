import ProjectCarousel from "../ui/project-carousel";
import { presidentProjects } from "@/data/projects-carousel-data";
export default function ProjectCarouselSection() {
  return (
    <section className="flex justify-center flex-col justify-self-center">
      <h1 className="font-formular text-mainblue font-black text-3xl sm:text-4xl lg:text-5xl text-center mb-8 lg:mb-6 px-4">
        ACHIEVEMENTS AND PROJECTS
      </h1>
      <ProjectCarousel projects={presidentProjects} />
    </section>
  );
}
