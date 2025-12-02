import React from "react";

const DownloadSamasynch = () => {
  return (
    <div className="mx-auto w-full rounded-lg border-0 bg-gradient-to-b from-white to-[#EDEDED] px-4 py-6 md:max-w-172 md:py-12 lg:max-w-220">
      <div className="flex flex-col items-center text-mainblue md:gap-2">
        <h1 className="font-trapix text-center text-2xl leading-none md:text-4xl">
          Need a Copy?
        </h1>
        <p className="font-formular-regular mt-2 text-center text-xs tracking-wider md:text-base">
          Download a copy of the official SAMASync calendar of events
        </p>
        <a
          className="font-formular-mono mt-3 cursor-pointer rounded-sm bg-mainblue px-4 py-1.5 text-center text-xs tracking-wide text-white md:rounded-xl md:px-12 md:py-3 md:text-sm"
          href="/documents/samasync-calendar-events-data.pdf"
          download="SAMASync-Calendar.pdf"
        >
          Download a Copy
        </a>
      </div>
    </div>
  );
};

export default DownloadSamasynch;