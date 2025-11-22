import React from "react";
import FAQAccordion from "../ui/faq-accordion";
import { FAQAccordionData } from "@/data/faq-accordion-data";

const FaqCategorySection = () => {
  return (
    <section className="flex justify-center px-4 mb-10">
      <div className="bg-mainblue w-full max-w-6xl rounded-3xl p-6 md:p-12 flex flex-col gap-6 md:flex-row ">
        {/* Left: title + text */}
        <div className="flex flex-col justify-center gap-4 text-center md:px-4 md:text-left md:justify-start md:gap-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-trapix">
            University Info
          </h1>
          <p className="text-white font-fomular-medium text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>

        {/* Right: accordion */}
        <div className="md:w-1/2">
          <FAQAccordion FaqAccordionData={FAQAccordionData} />
        </div>
      </div>
    </section>
  );
};

export default FaqCategorySection;
