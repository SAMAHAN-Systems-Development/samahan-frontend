import FAQAccordion from "../ui/FAQ-accordion";
import {
  aboutSamahanAccordionData,
  samahanFeesFundsBudgetAccordionData,
  samahanGrievancesAccordionData,
  samahanServicesandResourcesAccordionData,
} from "@/data/FAQ-accordion-data";

const FAQCategorySection = () => {
  return (
    <section className="flex flex-col space-y-4 px-4 my-10  items-center">
      <div className="bg-mainblue w-full max-w-6xl rounded-3xl p-6 md:p-12 flex flex-col gap-6 md:flex-row ">
        {/* Left: title + text */}
        <div className="flex flex-col gap-4  md:px-4 text-left justify-start md:gap-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-trapix">
            About SAMAHAN
          </h1>
        </div>

        {/* Right: accordion */}
        <div className="md:w-1/2">
          <FAQAccordion FaqAccordionData={aboutSamahanAccordionData} />
        </div>
      </div>
      <div className="bg-mainblue w-full max-w-6xl rounded-3xl p-6 md:p-12 flex flex-col gap-6 md:flex-row ">
        {/* Left: title + text */}
        <div className="flex flex-col gap-4  md:px-4 text-left justify-start md:gap-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-trapix">
            SAMAHAN Fees/Funds/Budget
          </h1>
        </div>

        {/* Right: accordion */}
        <div className="md:w-1/2">
          <FAQAccordion
            FaqAccordionData={samahanFeesFundsBudgetAccordionData}
          />
        </div>
      </div>
      <div className="bg-mainblue w-full max-w-6xl rounded-3xl p-6 md:p-12 flex flex-col gap-6 md:flex-row ">
        {/* Left: title + text */}
        <div className="flex flex-col gap-4  md:px-4 text-left justify-start md:gap-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-trapix">
            Student Grievances
          </h1>
        </div>

        {/* Right: accordion */}
        <div className="md:w-1/2">
          <FAQAccordion FaqAccordionData={samahanGrievancesAccordionData} />
        </div>
      </div>
      <div className="bg-mainblue w-full max-w-6xl rounded-3xl p-6 md:p-12 flex flex-col gap-6 md:flex-row ">
        {/* Left: title + text */}
        <div className="flex flex-col gap-4  md:px-4 text-left justify-start md:gap-8 md:w-1/2">
          <h1 className="text-3xl md:text-4xl text-white font-trapix">
            Services and Resources
          </h1>
        </div>

        {/* Right: accordion */}
        <div className="md:w-1/2">
          <FAQAccordion
            FaqAccordionData={samahanServicesandResourcesAccordionData}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQCategorySection;
