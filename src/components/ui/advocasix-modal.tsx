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

          // Sizing Logic (Frame)
          "h-auto min-h-[500px] max-h-[65vh] sm:max-h-[85vh]",
          "w-[95vw]",
          "sm:w-[90vw] sm:max-w-full",
          "md:w-[85vw] md:max-w-full",
          "lg:w-[60vw] lg:max-w-[920px]",
          "overflow-hidden",

          className
        )}
      >
        {/* SCROLL WRAPPER */}
        <div
          className={cn(
            // Make this take up all available space in the modal
            "flex flex-col h-full w-full",
            
            // Scroll Logic
            "overflow-y-auto",
            // Hide for Firefox
            "[scrollbar-width:none]",
            // Hide for IE and Edge
            "[-ms-overflow-style:none]",
            // Hide for Chrome, Safari and Opera
            "[&::-webkit-scrollbar]:hidden"
          )}
        >
          {/* IMAGE SECTION */}
          <div
            className={cn(
              // Base Layout
              "relative w-full shrink-0 overflow-hidden border-b-2 border-b-mainblue", // Removed rounded-t-xl here as parent clips it
              // Height Breakpoints
              "h-[256px]",
              "sm:h-[380px]",
              "md:h-[420px]",
              "lg:h-[320px]"
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
              "flex flex-col items-center",

              // Padding Breakpoints
              "px-10 py-10",
              "sm:px-20 sm:py-12",
              "md:px-19 md:py-10",
              "lg:px-20",
              "xl:px-30 xl:py-13",
              "2xl:px-30 2xl:pt-14 2xl:pb-15"
            )}
          >
            <DialogTitle asChild>
              <h1
                className={cn(
                  // Base Typography
                  "font-formular-black w-full text-center uppercase leading-tight text-mainblue",
                  // Size Breakpoints
                  "text-lg",
                  "sm:text-2xl",
                  "md:text-3xl",
                  "lg:text-3xl",
                  "xl:text-4xl",
                  "2xl:text-5xl"
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
                "sm:text-base",
                "lg:mt-3 lg:text-base",
                "xl:mt-4",
                "2xl:text-lg"
              )}
            >
              {content}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}