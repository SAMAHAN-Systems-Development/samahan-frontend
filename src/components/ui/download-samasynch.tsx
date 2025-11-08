import React from "react";

const DownloadSamasynch = () => {
  return (
    <div className="px-[5%] w-full">
      <div className="w-full max-w-6xl mb-24 lg:my-24 px-8 mx-auto bg-[#EDEDED] border-0 rounded-lg p-4">
        <div className="py-4 md:m-8 flex flex-col items-center text-mainblue gap-2 md:gap-4">
          <h1 className="font-trapix text-[7vw] md:text-5xl text-center">Need a Copy?</h1>
          <p className="font-formular text-[2.5vw] md:text-xl text-center">
            Download a copy of the official SAMASync calendar of events
          </p>
          <a
            className="px-8 py-2 md:px-12 md:py-3 text-[3vw] md:text-lg font-formular bg-mainblue rounded-2xl cursor-pointer text-center text-white"
            href="/sample.pdf"
            download="SAMASync-Calendar.pdf"
          >
            Download a Copy
          </a>
        </div>
      </div>
    </div>
  );
};

export default DownloadSamasynch;