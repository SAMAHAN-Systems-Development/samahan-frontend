"use client";

import Image from "next/image";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogTitle,
} from "@/components/ui/dialog";
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
      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm" />
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        className={cn(
          "flex h-svh max-h-fit w-full max-w-70 flex-col gap-0 overflow-y-auto rounded-xl border-2 border-mainblue p-0 shadow-2xl sm:max-w-120 sm:rounded-2xl md:max-w-150 lg:max-w-200",
          className,
        )}
      >
        <button
          onClick={() => onOpenChange(false)}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 grid h-9 w-9 cursor-pointer place-items-center rounded-full bg-mainblue text-white transition-all ease-in hover:scale-105 sm:h-10 sm:w-10 md:h-11 md:w-11"
        >
          <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
        </button>

        <Image
          className="max-h-40 min-h-40 w-full rounded-t-xl border-b-2 border-b-mainblue object-cover sm:max-h-56 sm:min-h-56 md:h-72 md:min-h-72 lg:h-80 lg:min-h-80 xl:h-96 xl:min-h-96"
          src={image.imgSource}
          alt={image.imageAlt}
          width={1920}
          height={1080}
          priority
        />

        <div className="flex w-full flex-col items-center py-5 text-center sm:py-7 md:py-8 lg:py-16">
          <DialogTitle asChild>
            <h1 className="font-formular-black w-full text-2xl leading-tight text-mainblue uppercase sm:text-3xl md:text-4xl lg:text-5xl">
              {title}
            </h1>
          </DialogTitle>

          <p className="font-formular mx-0 mt-1.5 w-full max-w-none px-8 text-justify text-[11px] leading-[1.25] text-mainblue sm:mt-2 sm:text-xs md:mt-2.5 md:px-12 md:text-sm md:leading-snug lg:px-18">
            {content}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
