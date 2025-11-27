import React from "react";

const DownloadSamasynch = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-3xl px-8 mx-auto bg-[#EDEDED] border-0 rounded-lg p-4">
        <div className="py-4 flex flex-col items-center text-mainblue gap-2 md:gap-4">
          <h1 className="font-trapix text-[7vw] md:text-5xl text-center">
            Need a Copy?
          </h1>
          <p className="font-formular text-[2.5vw] md:text-xl text-center">
            Download a copy of the official SAMASync calendar of events
          </p>
          <a
            className="px-8 py-2 md:px-12 md:py-3 text-[3vw] md:text-lg font-formular bg-mainblue rounded-2xl cursor-pointer text-center text-white"
            href="/documents/samasync-calendar-events-data.pdf"
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
