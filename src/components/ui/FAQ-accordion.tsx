import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

import { type FAQAccordionDataType } from "@/data/FAQ-accordion-data";

export interface FAQAccordionProps {
  FaqAccordionData: FAQAccordionDataType[];
}

function FAQAccordion({ FaqAccordionData }: FAQAccordionProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="w-full">
        <Accordion type="multiple" className="w-full">
          {FaqAccordionData.map((accordion, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-4xl bg-[#EDEDED] overflow-hidden mb-5 "
            >
              <AccordionTrigger
                className={
                  "flex items-center justify-between px-6 py-4 text-lg font-semibold hover:cursor-pointer select-none text-blue-900 " +
                  "data-[state=open]:underline data-[state=open]:underline-offset-4 hover:no-underline focus:no-underline  data-[state=open]:pb-1 " +
                  "[&>svg]:bg-mainblue [&>svg]:text-white [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-9 [&>svg]:h-9 [&>svg]:flex [&>svg]:items-center [&>svg]:justify-center"
                }
              >
                {accordion.AccordionTitle}
              </AccordionTrigger>
              <AccordionContent className="px-4 pt-0 mt-2 lg:px-4 sm:px-8 text-sm text-blue-900">
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
