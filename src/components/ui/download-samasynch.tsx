import React from "react";

const DownloadSamasynch = () => {
  return (
    <div className="mx-auto w-full max-w-68 rounded-lg border-0 bg-[#EDEDED] px-4 py-6 md:max-w-172 md:py-12 lg:max-w-220">
      <div className="flex flex-col items-center text-mainblue md:gap-2">
        <h1 className="font-trapix text-center text-base leading-none md:text-4xl lg:text-5xl">
          Need a Copy?
        </h1>
        <p className="font-formular-regular mt-0.5 text-center text-[.4375rem] tracking-wider md:text-base">
          Download a copy of the official SAMASync calendar of events
        </p>
        <a
          className="font-formular-mono mt-2 cursor-pointer rounded-sm bg-mainblue px-4 py-1 text-center text-[.5rem] tracking-wide text-white md:rounded-xl md:px-12 md:py-3 md:text-sm"
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

{
  /* <section className="relative z-10 w-full flex flex-col items-center justify-center text-center py-10 px-4 sm:px-8 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md max-w-3xl mx-auto">
  <h1 className="text-2xl sm:text-3xl font-bold text-mainblue mb-3 font-trapix">
    Need a Copy?
  </h1>
  <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base ">
    Download a copy of the official{" "}
    <span className="font-semibold">SAMA&nbsp;Sync</span> calendar of events.
  </p>
  <Button className=" font-formular-mono bg-mainblue hover:bg-mainblue/90 text-white text-sm sm:text-base px-6 py-2.5 shadow transition-all duration-300">
    Download a Copy
  </Button>
</section>; */
}
