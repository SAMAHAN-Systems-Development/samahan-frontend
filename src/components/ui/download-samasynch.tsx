import React from "react";

const DownloadSamasynch = () => {
  return (
    <div className="w-full max-w-6xl my-24 px-8 mx-auto bg-[#EDEDED] border-0 rounded-lg p-4">
      <div className="m-8 flex flex-col items-center text-mainblue gap-4">
        <h1 className="font-trapix text-5xl">Need a Copy?</h1>
        <p className="font-formular text-xl">
          Download a copy of the official SAMASync calendar of events
        </p>
        <a
          className="px-12 py-3 text-lg font-formular bg-mainblue rounded-2xl cursor-pointer text-white"
          href="/sample.pdf"
          target="_blank"
        >
          Download a Copy
        </a>
      </div>
    </div>
  );
};

export default DownloadSamasynch;


//TEST COMPONENT

// import DownloadSamasynch from "@/components/ui/download-samasynch";
// <DownloadSamasynch />;