import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

import { type FAQAccordionDataType } from "@/data/FAQ-accordion-data";

export interface FAQAccordionProps {
  FaqAccordionData: FAQAccordionDataType[];
  isPrivacyPolicy?: boolean;
}

function FAQAccordion({ FaqAccordionData, isPrivacyPolicy = false }: FAQAccordionProps) {
  return (
    <div className={`w-full mx-auto ${isPrivacyPolicy ? "" : "max-w-3xl px-2"}`}>
      <div className="w-full">
        <Accordion type="multiple" className="w-full">
          {FaqAccordionData.map((accordion, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className={`rounded-4xl overflow-hidden mb-5 ${
                isPrivacyPolicy
                  ? "bg-white border-2 border-mainblue"
                  : "bg-[#EDEDED]"
              }`}
            >
              <AccordionTrigger
                className={
                  "flex items-center justify-between px-6 py-4 text-base md:text-lg font-formular-medium hover:cursor-pointer select-none text-blue-900 " +
                  "data-[state=open]:underline data-[state=open]:underline-offset-4 hover:no-underline focus:no-underline data-[state=open]:pb-1 " +
                  "[&>svg]:bg-mainblue [&>svg]:text-white [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-9 [&>svg]:h-9 [&>svg]:flex [&>svg]:items-center [&>svg]:justify-center"
                }
              >
                <span 
                  className="text-left"
                  dangerouslySetInnerHTML={{ __html: accordion.AccordionTitle }} 
                />
              </AccordionTrigger>
              <AccordionContent
                className={`px-6 pt-0 mt-2 lg:ml-4 lg:mr-12 text-blue-900 text-sm ${
                  isPrivacyPolicy ? "md:text-base" : ""
                }`}
              >
                <span
                  className="block"
                  dangerouslySetInnerHTML={{
                    __html: accordion.Accordioncontent.replace(/\n/g, "<br />"),
                  }}
                />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQAccordion;