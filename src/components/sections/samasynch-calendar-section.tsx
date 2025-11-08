import CalendarPicker from "../ui/calendar-picker";
import { useState, useEffect } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import CalendarEntry from "../ui/calendar-entry";
import { Button } from "../ui/button";
import {
  FIRST_SEMESTER,
  SECOND_SEMESTER,
  type MonthData,
} from "@/data/samasynch-calendar-section-data";
import Image from "next/image";

interface ActiveCalendarEntry {
  startDate: number;
  endDate?: number;
  isClicked?: number;
}

const SamaSynchCalendarSection = () => {
  const [semesterMonths, setSemesterMonths] = useState(
    Object.keys(FIRST_SEMESTER)
  );
  const [currentMonth, setCurrentMonth] = useState<string>(semesterMonths[0]);
  const [semester, setSemester] =
    useState<Record<string, MonthData>>(FIRST_SEMESTER);
  const [active, setActive] = useState<string>("FIRST");
  const [activeCalendarEntry, setActiveCalendarEntry] =
    useState<ActiveCalendarEntry>({
      startDate: 0,
      endDate: 0,
    });

  useEffect(() => {
    if (semesterMonths.length > 0) {
      setCurrentMonth(semesterMonths[0]);
    }
  }, [semesterMonths]);

  const prevMonth = () => {
    const monthIndex = semesterMonths.indexOf(currentMonth);
    const changeIndex =
      (monthIndex - 1 + semesterMonths.length) % semesterMonths.length;
    setCurrentMonth(semesterMonths[changeIndex]);
  };

  const nextMonth = () => {
    const monthIndex = semesterMonths.indexOf(currentMonth);
    const changeIndex =
      (monthIndex + 1 + semesterMonths.length) % semesterMonths.length;
    setCurrentMonth(semesterMonths[changeIndex]);
  };

  return (
    <div className="relative flex flex-col items-center gap-16 w-full pt-10 pb-100 px-6 sm:px-10 lg:px-16">
      {/* BACKGROUND IMAGE */}
      <div className="absolute left-1/2 top-[30%] md:top-[40%] -translate-x-1/2 h-[75vh] md:h-[70vh] lg:h-[75vh] -z-10 pointer-events-none">
        <div className="relative w-[180vw] h-full">
          <Image
            alt="SamaSynch Background"
            src="/images/SAMASYNC.png"
            fill
            priority
            className="object-contain object-bottom scale-105"
          />
          {/* Smooth upward fade */}
          <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black_0%,black_15%,transparent_70%)]" />
        </div>
      </div>

      {/* SEMESTER SWITCH */}
      <section className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 z-10 items-center justify-center w-full">
        <Button
          className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 rounded-xl hover:scale-102 text-center"
          variant="semester"
          active={active === "FIRST"}
          onClick={() => {
            setSemesterMonths(Object.keys(FIRST_SEMESTER));
            setSemester(FIRST_SEMESTER);
            setActive("FIRST");
          }}
        >
          FIRST SEMESTER
        </Button>

        <Button
          className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 rounded-xl hover:scale-102 text-center"
          variant="semester"
          active={active === "SECOND"}
          onClick={() => {
            setSemesterMonths(Object.keys(SECOND_SEMESTER));
            setSemester(SECOND_SEMESTER);
            setActive("SECOND");
          }}
        >
          SECOND SEMESTER
        </Button>
      </section>

      {/* MONTH HEADER */}
      <section className="flex items-center justify-center gap-5 w-full max-w-2xl mx-auto z-10">
        <button onClick={prevMonth}>
          <BiSolidLeftArrow
            className="hover:scale-105 text-mainblue transition-all"
            size={30}
          />
        </button>
        <div className="flex-1 flex justify-center items-center">
          <h1 className="text-3xl md:text-5xl font-formular-black text-mainblue text-center">
            {currentMonth}
          </h1>
        </div>
        <button onClick={nextMonth}>
          <BiSolidRightArrow
            className="hover:scale-105 text-mainblue transition-all"
            size={30}
          />
        </button>
      </section>

      {/* CALENDAR + ENTRIES */}
      <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full max-w-6xl z-10">
        {/* Calendar */}
        <div className="w-full md:w-[380px] flex justify-center md:justify-start px-6 sm:px-8">
          <div className="w-full max-w-sm sm:max-w-md flex justify-center">
            <CalendarPicker
              month={new Date(2025, semester[currentMonth].index, 1)}
              dateWithEvents={semester[currentMonth].dateWithEvents}
              activeEntry={{
                startDate: activeCalendarEntry.startDate,
                endDate: activeCalendarEntry.endDate,
              }}
            />
          </div>
        </div>

        {/* Entries */}
        <div className="flex flex-col gap-4 w-full md:flex-1 md:max-w-[800px] px-4 sm:px-8">
          {semester[currentMonth].calendarEntry?.length ? (
            semester[currentMonth].calendarEntry.map((sem, index) => (
              <CalendarEntry
                key={index}
                startDate={sem.startDate}
                endDate={sem.endDate}
                active={activeCalendarEntry.isClicked == index ? true : false}
                eventName={sem.eventName}
                className={sem.className}
                onClick={() =>
                  setActiveCalendarEntry({
                    startDate: sem.startDate,
                    endDate: sem.endDate,
                    isClicked: index,
                  })
                }
              />
            ))
          ) : (
            <p className="text-gray-500 text-center">No events this month.</p>
          )}
        </div>
      </section>

      {/* CTA CARD */}
      <section className="relative z-10 w-full flex flex-col items-center justify-center text-center py-10 px-4 sm:px-8 bg-gradient-to-b from-white to-blue-50 rounded-xl shadow-md max-w-3xl mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold text-mainblue mb-3 font-trapix">
          Need a Copy?
        </h1>
        <p className="text-gray-600 max-w-md mb-6 text-sm sm:text-base ">
          Download a copy of the official{" "}
          <span className="font-semibold">SAMA&nbsp;Sync</span> calendar of
          events.
        </p>
        <Button className=" font-formular-mono bg-mainblue hover:bg-mainblue/90 text-white text-sm sm:text-base px-6 py-2.5 rounded-lg shadow transition-all duration-300">
          Download a Copy
        </Button>
      </section>
    </div>
  );
};

export default SamaSynchCalendarSection;
