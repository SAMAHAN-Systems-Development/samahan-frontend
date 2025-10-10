"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface AdvocasixModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  content: string;
  image: { imgSource: string; imageAlt: string };
  className?: string;
}

export default function AdvocasixModal({
  open,
  onOpenChange,
  title,
  content,
  image,
  className,
}: AdvocasixModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className={cn(
          "w-[70vw] sm:w-[66vw] md:w-[61vw] lg:w-[58vw] xl:w-[54vw] 2xl:w-[50vw]",

          "max-w-[100vw] sm:!max-w-[92vw] md:!max-w-[86vw] lg:!max-w-[78vw]",
          "gap-0",
          "p-0",
          "border-2 border-mainblue",
          "overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl",

          className
        )}
      >
        <button
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-mainblue hover:scale-105 transition-all ease-in text-white
                     sm:h-10 sm:w-10 md:h-11 md:w-11"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
        </button>

        <div className="relative border-b-2 border-b-mainblue">
          <Image
            src={image.imgSource}
            alt={image.imageAlt}
            width={1920}
            height={1080}
            priority
            className="
              w-full object-cover
              h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96
              rounded-t-xl sm:rounded-t-2xl
            "
          />
        </div>

        <div
          className="
          py-5 sm:py-7 md:py-8 lg:py-16
          flex flex-col items-center text-center
          w-full

        "
        >
          <h1
            className="
              font-formular-black leading-tight
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              text-mainblue
             
                   w-full
            "
          >
            {title}
          </h1>

          <p
            className="
            mt-1.5 sm:mt-2 md:mt-2.5
            font-formular-regular
            text-mainblue
            text-[11px] sm:text-xs md:text-sm
            leading-[1.25] md:leading-snug
            w-full max-w-none           
            mx-0 
            px-8    md:px-12   lg:px-18
            text-left
          "
          >
            {content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
