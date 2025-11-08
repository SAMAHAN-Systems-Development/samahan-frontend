import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const reportCardVariants = cva("grid grid-rows-3 overflow-hidden", {
  variants: {
    size: {
      default: "max-h-105 min-h-105 max-w-105 min-w-105",
      large: "max-h-155 min-h-155 max-w-155 min-w-155",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ReportCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof reportCardVariants> {
  imageUrl: string;
  title: string;
  description: string;
  cardType: number;
}

export const ReportCard = React.forwardRef<HTMLDivElement, ReportCardProps>(
  (
    { imageUrl, title, cardType, description, className, size, ...props },
    ref,
  ) => {
    const finalReportCardSize = cardType === 2 ? "large" : "default";
    const finalReportCardThumbnailTitleSize =
      cardType === 2 ? "large" : "default";

    return (
      <article
        ref={ref}
        className={cn(
          reportCardVariants({ size: finalReportCardSize, className }),
        )}
        {...props}
      >
        {/* thumbnail section */}
        <div className="relative row-span-2">
          <Image
            className="h-full w-full object-cover"
            src={imageUrl}
            width={500}
            height={500}
            alt={title}
          />

          <div className="absolute bottom-0 z-10 flex w-full flex-col gap-2">
            {/* thumbnail extra info */}
            <div className="flex flex-row justify-between px-4">
              <div className="font-formular-regular rounded-[3] border border-white px-2 text-xs -tracking-wider text-white">
                <p>SAMAHAN Central Board</p>
              </div>
              <div className="font-formular-regular rounded-[3] border border-white px-2 text-xs -tracking-wider text-white">
                <p>August 14, 2025</p>
              </div>
            </div>

            {/* thumbnail title */}
            <ReportCardThumbnailTitle
              size={finalReportCardThumbnailTitleSize}
              title={title}
            />
          </div>
        </div>

        {/* description section */}
        <div className="row-span-1">
          <ReportCardDescription description={description} />
        </div>
      </article>
    );
  },
);

ReportCard.displayName = "ReportCard";

interface ReportCardDescriptionProps
  extends React.HTMLAttributes<HTMLDivElement> {
  description: string;
  wrapperClassName?: string;
}

export const ReportCardDescription = React.forwardRef<
  HTMLDivElement,
  ReportCardDescriptionProps
>(({ description, wrapperClassName, className, ...props }, ref) => {
  return (
    <div className={cn("bg-white p-4", wrapperClassName)}>
      <p
        ref={ref}
        className={cn(
          "font-formular-regular text-mainblue line-clamp-7 text-center text-xs leading-3.5",
          className,
        )}
        {...props}
      >
        {description}
      </p>
    </div>
  );
});

ReportCardDescription.displayName = "ReportCardDescription";

const reportCardThumbnailTitleVariants = cva(
  "font-formular-black truncate text-center text-white",
  {
    variants: {
      size: {
        default: "p-4 text-2xl -tracking-wider",
        large: "px-4 py-8 text-4xl tracking-tighter",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

interface ReportCardThumbnailTitleProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof reportCardThumbnailTitleVariants> {
  title: string;
  wrapperClassName?: string;
}

export const ReportCardThumbnailTitle = React.forwardRef<
  HTMLParagraphElement,
  ReportCardThumbnailTitleProps
>(({ title, wrapperClassName, className, size, ...props }, ref) => {
  return (
    <div
      className={cn("bg-mainblue w-full rounded-t-2xl", wrapperClassName)}
      {...props}
    >
      <p
        ref={ref}
        className={cn(reportCardThumbnailTitleVariants({ size, className }))}
        title={title}
        {...props}
      >
        {title}
      </p>
    </div>
  );
});

ReportCardThumbnailTitle.displayName = "ReportCardThumbnailTitle";
