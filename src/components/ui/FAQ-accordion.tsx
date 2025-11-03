"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

import { FAQAccordionData } from "../../data/FAQ-accordion-data";

const FAQS = FAQAccordionData.map((item) => ({
  title: item.AccordionTitle,
  content: item.Accordioncontent,
}));

export default function FAQAccordion() {
  return (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="w-full">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-4xl bg-slate-400 overflow-hidden mb-20 "
            >
              <AccordionTrigger
                className={
                  "flex items-center justify-between px-6 py-4 text-lg font-semibold hover:cursor-pointer select-none text-blue-900 " +
                  "underline underline-offset-4 data-[state=open]:pb-1 " +
                  "[&>svg]:bg-[#052a73] [&>svg]:text-white [&>svg]:rounded-full [&>svg]:p-2 [&>svg]:w-9 [&>svg]:h-9 [&>svg]:flex [&>svg]:items-center [&>svg]:justify-center"
                }
              >
                {f.title}
              </AccordionTrigger>

              <AccordionContent className="px-6 pt-0 ml-4 mr-12 text-sm text-blue-900">
                {f.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
