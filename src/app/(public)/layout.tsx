import "../globals.css";
import {
  trapix,
  formularRegular,
  formularMedium,
  formularBold,
  formularBlack,
  formularMono,
  fontspring,
} from "../font";
import Navbar from "@/components/ui/navigation-bar";
import Footer from "@/components/ui/Footer";
// import Accordion from "@/components/ui/FAQ-accordion";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={[
          trapix.variable,
          formularRegular.variable,
          formularMedium.variable,
          formularBold.variable,
          formularBlack.variable,
          formularMono.variable,
          fontspring.variable,
          "antialiased",
        ].join(" ")}
      >
        <Navbar />
        {/* <Accordion></Accordion> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
