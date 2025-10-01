import localFont from "next/font/local";

// Trapix 400 Regular
export const trapix = localFont({
  src: [
    {
      path: "../../public/fonts/trapix-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-trapix",
  display: "swap",
});

// Formular 400 Regular
export const formularRegular = localFont({
  src: [
    {
      path: "../../public/fonts/formular-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-formular-regular",
  display: "swap",
});

// Formular 500 Medium
export const formularMedium = localFont({
  src: [
    {
      path: "../../public/fonts/formular-medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-formular-medium",
  display: "swap",
});

// Formular 700 Bold
export const formularBold = localFont({
  src: [
    {
      path: "../../public/fonts/formular-bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-formular-bold",
  display: "swap",
});

// Formular 900 Black
export const formularBlack = localFont({
  src: [
    {
      path: "../../public/fonts/formular-black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-formular-black",
  display: "swap",
});

// Formular Mono 950
export const formularMono = localFont({
  src: [
    {
      path: "../../public/fonts/formular-mono.otf",
      weight: "950",
      style: "normal",
    },
  ],
  variable: "--font-formular-mono",
  display: "swap",
});

// Breul Grotesk A Light 300 Regular (calendar)
export const fontspring = localFont({
  src: [
    {
      path: "../../public/fonts/Fontspring-DEMO-breulgroteska-regular.otf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-fontspring",
  display: "swap",
});