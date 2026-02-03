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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={"/images/favicon.ico?v=M44lzPylqQ"} sizes="any" />
        <link
          rel="mask-icon"
          href="{{ base_path }}/images/safari-pinned-tab.svg?v=M44lzPylqQ"
          color="#000000"
        ></link>
        <meta property="og:image" content={"/images/SysDevLogo.png"}></meta>
      </head>
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
