"use client";
import Image from "next/image";
import TabHeader from "../ui/tab-header";
export default function DepartmentDirectorySection() {
  return (
    <>
      <TabHeader name="DEPARTMENT CHARIPERSONS AND SCHOOL DEANS"></TabHeader>

      <div className="bg-mainblue py-8 md:py-12 px-6 md:px-22 rounded-xl justify-self-center mt-0 md:mt-12">
        <div className="md:hidden mb-6">
          <p className="font-trapix text-center text-2xl md:text-5xl text-white uppercase">
            Department Chairpersons and School Deans
          </p>
        </div>

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
          onClick={() => {}}
          className="font-formular text-base md:text-2xl bg-white text-mainblue px-12 md:px-80 py-3 md:py-4 justify-center rounded-3xl mt-6 md:mt-8 mx-auto block hover:bg-gray-200 cursor-pointer"
        >
          View Directory
        </button>
      </div>

      <div className="relative w-full h-[400px] md:h-[800px] ">
        <Image
          src="/images/tape-design/tape-1.png"
          alt="Background"
          fill
          quality={100}
          priority
          style={{
            objectFit: "fill",
            width: "100%",
          }}
        />
        <div className="absolute inset-0 flex justify-center items-center px-4 md:px-0">
          <div className="relative w-full max-w-[340px] h-[280px] md:max-w-[1200px] md:h-[470px]">
            <Image
              src={"/images/academix-images/directory-academix.jpg"}
              alt="Directory Academix"
              fill
              className="object-cover rounded-lg"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
// /images/tape-design/tape-1.png
