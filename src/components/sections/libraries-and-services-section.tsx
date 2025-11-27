import TabHeader from "../ui/tab-header";
import { libarariesAndServicesData } from "@/data/libraries-and-services-data";
import Image from "next/image";

const LibrariesAndServicesSection = () => {
  return (
    <div className="relative w-full overflow-hidden pb-30">
      <div className="absolute inset-0 -z-10 w-full hidden md:block">
        <Image
          src="/images/tape-design/tape-1.png"
          alt="Tape Design"
          fill
          quality={100}
          priority
          className="object-contain translate-y-125 scale-x-115"
        />
      </div>

      <div className="relative w-full md:max-w-7xl mx-auto">
        {/* Header */}
        <div className="w-full md:w-auto my-8 ">
          <TabHeader
            name="LIBRARIES AND SERVICES"
            description="The libraries offer a range of resources, digital tools and study spaces that support students' learning, research and overall academic growth."
          />
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block overflow-x-auto my-12 px-4">
          <table className="border-2 border-mainblue w-full bg-white">
            <thead>
              <tr className="text-mainblue">
                <th className="border-2 border-mainblue text-mainblue px-6 py-4 text-center font-semibold text-sm w-1/4">
                  Library
                </th>
                <th className="border border-mainblue text-mainblue px-6 py-4 text-center font-semibold text-sm">
                  Library Description
                </th>
                <th className="border border-mainblue text-mainblue px-6 py-4 text-center font-semibold text-sm">
                  Narrative Descriptions
                </th>
              </tr>
            </thead>

            <tbody>
              {libarariesAndServicesData.map((data) => (
                <tr key={data.libary} className="bg-white">
                  <td className="border-2 border-mainblue text-mainblue px-6 py-4 text-center">
                    {data.link ? (
                      <a
                        href={data.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-mainblue text-sm font-semibold hover:underline"
                      >
                        {data.libary}
                      </a>
                    ) : (
                      <span className="underline text-mainblue text-sm font-semibold">
                        {data.libary}
                      </span>
                    )}
                  </td>

                  <td className="border-2 border-mainblue text-mainblue px-6 py-4 text-left text-sm">
                    {data.libaryDescription}
                  </td>

                  <td className="border-2 border-mainblue text-mainblue px-6 py-4 text-left text-sm">
                    {data.narrativeDescriptions}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Version */}
        <div className="md:hidden px-4 py-6 space-y-4">
          {libarariesAndServicesData.map((data) => (
            <div
              key={data.libary}
              className="border-2 border-mainblue rounded-lg p-4 bg-white"
            >
              <div className="mb-3">
                <p className="text-xs text-mainblue font-black mb-1">Source:</p>

                {data.link ? (
                  <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-mainblue font-semibold underline text-sm hover:opacity-80"
                  >
                    {data.libary}
                  </a>
                ) : (
                  <span className="text-mainblue font-semibold underline text-sm">
                    {data.libary}
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs text-mainblue mb-1 font-black">
                  Library Description:
                </p>
                <p className="text-sm text-mainblue font-medium">
                  {data.libaryDescription}
                </p>
              </div>

              <div>
                <p className="text-xs text-mainblue mb-1 font-black">
                  Narrative Descriptions:
                </p>
                <p className="text-sm text-mainblue font-medium">
                  {data.narrativeDescriptions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LibrariesAndServicesSection;
