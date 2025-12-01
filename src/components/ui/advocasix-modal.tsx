"use client";
import Image from "next/image";
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
      <DialogOverlay className="fixed inset-0 bg-black/40 backdrop-blur-sm animate-in fade-in-0" />
      <DialogContent
        onInteractOutside={(e) => e.preventDefault()}
        showCloseButton={true}
        className={cn(
          // Positioning & Centering
          "fixed left-[50%] top-[50%] z-50 flex flex-col gap-0 rounded-xl border-2 border-mainblue bg-white p-0 shadow-2xl duration-200 translate-x-[-50%] translate-y-[-50%]",
          
          // Sizing Logic
          "h-auto max-h-[85vh]",
          "w-[95vw] sm:max-w-full",
          "sm:w-[90vw] sm:max-w-full",
          "md:w-[85vw]",
          "lg:w-[65vw] lg:max-w-[920px]",
          className
        )}
      >
        {/* IMAGE SECTION */}
        <div
          className={cn(
            // Base Layout
            "relative w-full shrink-0 overflow-hidden rounded-t-xl border-b-2 border-b-mainblue",
            // Height Breakpoints
            "h-[168px]",
            "sm:h-[168px]",
            "lg:h-[192px]",
            "xl:h-[224px]",
            "2xl:h-[256px]"
          )}
        >
          <Image
            className="h-full w-full object-cover"
            src={image.imgSource}
            alt={image.imageAlt}
            width={1200}
            height={800}
            priority
          />
        </div>

        {/* TEXT CONTENT AREA */}
        <div
          className={cn(
            // Base Layout
            "flex flex-1 min-h-0 flex-col items-center overflow-y-auto",
            // Padding Breakpoints
            "px-6 py-8",
            "sm:px-16 sm:py-8",
            "md:px-19",
            "lg:px-20",
            "xl:py-10",
            "2xl:px-26 2xl:pt-12 2xl:pb-13"
          )}
        >
          <DialogTitle asChild>
            <h1
              className={cn(
                // Base Typography
                "font-formular-black w-full text-center uppercase leading-tight text-mainblue",
                // Size Breakpoints
                "text-lg",
                "md:text-xl",
                "lg:text-2xl",
                "xl:text-3xl",
                "2xl:text-4xl"
              )}
            >
              {title}
            </h1>
          </DialogTitle>
          <div
            className={cn(
              // Base Typography & Layout
              "w-full text-justify leading-relaxed text-mainblue/90",
              // Margin & Text Size Breakpoints
              "mt-4 text-sm",
              "lg:mt-3 lg:text-base",
              "xl:mt-4",
              "2xl:text-lg"
            )}
          >
            {content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}