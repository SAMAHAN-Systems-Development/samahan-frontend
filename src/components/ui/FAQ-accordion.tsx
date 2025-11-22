import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

import { type FAQAccordionDataType } from "@/data/faq-accordion-data";

export interface FAQAccordionProps {
  FaqAccordionData: FAQAccordionDataType[];
}

function FAQAccordion({ FaqAccordionData }: FAQAccordionProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {FaqAccordionData.map((accordion, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-4xl bg-white overflow-hidden mb-5 "
            >
              <AccordionTrigger
                className={
                  "flex items-center justify-between px-6 py-4 text-lg font-semibold hover:cursor-pointer select-none text-blue-900 " +
                  "data-[state=open]:underline data-[state=open]:underline-offset-4 hover:no-underline focus:no-underline  data-[state=open]:pb-1 " +
                  "[&>svg]:bg-[#052a73] [&>svg]:text-white [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-9 [&>svg]:h-9 [&>svg]:flex [&>svg]:items-center [&>svg]:justify-center"
                }
              >
                {accordion.AccordionTitle}
              </AccordionTrigger>

              <AccordionContent className="px-6 pt-0 ml-4 mr-12 text-sm text-blue-900">
                {accordion.Accordioncontent}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQAccordion;
