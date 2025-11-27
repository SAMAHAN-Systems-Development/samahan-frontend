import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "px-4 py-2 font-formular-mono inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-mainblue text-white hover:bg-blue1",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        semester:
          "border-2 border-mainblue font-formular-mono text-base rounded-2xl px-10 py-6 transition-all",
        tab: "flex-auto border-[2px] border-mainblue text-xs lg:text-sm 2xl:text-base font-medium transition-colors whitespace-nowrap uppercase cursor-pointer h-min py-3 2xl:py-4",
      },
      active: {
        true: "bg-white text-mainblue",
        false: "bg-mainblue text-white",
      },
    },
    compoundVariants: [
      {
        variant: "tab",
        active: true,
        className: "bg-mainblue text-white", 
      },
      {
        variant: "tab",
        active: false,
        className: "bg-white text-mainblue hover:bg-mainblue hover:text-white",
      },
    ],
    defaultVariants: {
      variant: "default",
    },
  }
)

function Button({
  className,
  variant,
  active,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, className, active }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
