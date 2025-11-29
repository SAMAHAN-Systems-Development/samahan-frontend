"use client";
import TabHeader from "../ui/tab-header";
import { recommendedWebsitesForRRL } from "@/data/recommend-websites-for-RRL";

export default function RecommendedWebsites() {
  return (
    <>
      <TabHeader
        name="RECOMMENDED WEBSITES FOR RRL"
        description="These interdisciplinary courses are designed to enhance students' knowledge in areas such as humanities, social sciences, natural sciences, and mathematics, promoting well-rounded personal and academic growth."
      ></TabHeader>

      <div className="hidden md:block overflow-x-auto max-w-5xl mx-auto my-12">
        <table className="border-2 border-mainblue">
          <thead className="bg-white">
            <tr className="text-mainblue">
              <th className="border-2 border-mainblue text-mainblue px-3 py-2 text-center font-semibold text-sm w-1/4">
                Source
              </th>
              <th className="border border-mainblue text-mainblue px-3 py-2 text-center font-semibold text-sm">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {recommendedWebsitesForRRL.map((website) => (
              <tr key={website.source} className="bg-white">
                <td className="border-2 border-mainblue text-mainblue px-3 py-2 text-center">
                  {website.link ? (
                    <a
                      href={website.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-mainblue text-sm font-semibold hover:underline"
                    >
                      {website.source}
                    </a>
                  ) : (
                    <span className="underline text-mainblue text-sm font-semibold">
                      {website.source}
                    </span>
                  )}
                </td>
                <td className="border-2 border-mainblue text-mainblue px-3 py-2 text-left text-sm">
                  {website.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden px-4 py-6 space-y-4">
        {recommendedWebsitesForRRL.map((website) => (
          <div
            key={website.source}
            className="border-2 border-mainblue rounded-lg p-4 bg-white"
          >
            <div className="mb-3">
              <p className="text-xs text-mainblue font-black mb-1">Source:</p>
              {website.link ? (
                <a
                  href={website.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mainblue font-semibold underline text-sm hover:opacity-80"
                >
                  {website.source}
                </a>
              ) : (
                <span className="text-mainblue font-semibold underline text-sm">
                  {website.source}
                </span>
              )}
            </div>
            <div>
              <p className="text-xs text-mainblue mb-1 font-black">
                Description:
              </p>
              <p className="text-sm text-mainblue font-medium">
                {website.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}