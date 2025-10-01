import Image from "next/image";

export const metadata = {
  title: "SAMAHAN Website 2025-2026",
  description: "Frontend for Samahan Website",
};

export default function Home() {
  return (
    <div>
      <div className="font-extrabold">MAIN COLORS:</div>
      <div className="flex items-center">
        <div className="mr-2">- Main Blue: </div>
        <div className="bg-mainblue h-4 w-4"></div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">- Blue 1: </div>
        <div className="bg-blue1 h-4 w-4"></div>
      </div>
      <div className="flex items-center">
        <div className="mr-2">- Blue 2: </div>
        <div className="bg-blue2 h-4 w-4"></div>
      </div>
      <div className="mt-8 space-y-2">
          <div className="uppercase font-extrabold">Font families and styles:</div>
        <div className="font-trapix text-lg">- Trapix 400 Regular</div>
        <div className="font-formular-mono text-lg">- Formular 950 Mono</div>
        <div className="font-formular-black text-lg">- Formular 900 Black</div>
        <div className="font-formular-medium text-lg">- Formular 500 Medium</div>
        <div className="font-formular-bold text-lg">- Formular 700 Bold</div>
        <div className="font-formular-regular text-lg">- Formular 400 Regular</div>
        <div className="font-fontspring text-lg">- FONTSPRING DEMO - Breul Grotesk A 300 Regular</div>
      </div>
      <div className="mt-8 font-extrabold uppercase">Test your components below</div>
    </div>
  );
}
