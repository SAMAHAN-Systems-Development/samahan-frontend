"use client";
import Image from "next/image";
import TabHeader from "../ui/tab-header";
export default function DepartmentDirectorySection() {
  return (
    <div className="w-full flex flex-col items-center z-50 overflow-x-clip">
      <TabHeader name="DEPARTMENT CHARIPERSONS AND SCHOOL DEANS"></TabHeader>

      <div className="bg-mainblue py-8 md:py-12 px-6 md:px-22 md:rounded-xl justify-self-center mt-0 md:mt-12 w-full z-10 max-w-6xl bg-gradient-to-b from-mainblue to-blue1">
        

        <p className="font-trapix text-center text-3xl md:text-5xl text-white">
          Meet Your Academic Leaders
        </p>
        <br />
        <p className="font-formular text-center text-white text-sm md:text-base px-4">
          This directory provides a comprehensive list of all department
          chairpersons and school deans <br className="hidden md:block" />
          across Ateneo de Davao University.
        </p>
        <button
          onClick={() => window.open("/documents/Cluster-Deans-and-Chairs.pdf", "_blank")}
          className="font-formular text-base md:text-2xl bg-white text-mainblue w-full py-3 md:py-4 justify-center rounded-3xl mt-6 md:mt-8 mx-auto block hover:bg-gray-200 cursor-pointer"
        >
          View Directory
        </button>
      </div>

      <div className="relative w-full h-[400px] md:h-[800px] ">
        <div className="md:hidden pointer-events-none absolute left-1/2 top-1/2 z-0 h-[300px] xs:h-[370px] sm:h-[435px] w-[200vw] -translate-x-1/2 -translate-y-1/2 md:h-[700px] md:w-[1400px] lg:h-[800px] lg:w-[1600px] scale-125">
          <Image
            src="/images/tape-design/tape-1.svg"
            alt="Decorative tape design"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 flex justify-center items-center px-4 md:px-0">
          <div className="relative w-full max-w-[340px] h-[280px] md:max-w-6xl md:h-[470px]">
            <Image
              src={"/images/academix-images/directory-academix.jpg"}
              alt="Directory Academix"
              fill
              className="object-cover rounded-lg"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}