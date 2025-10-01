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
        {children}
      </body>
    </html>
  );
}