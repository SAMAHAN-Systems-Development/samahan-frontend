"use client";
import CalendarPicker from "../ui/calendar-picker";
import { useState } from "react";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import CalendarEntry from "../ui/calendar-entry";
import DownloadSamasynch from "../ui/download-samasynch";
import {
  ACADEMIC_YEAR_2025_2026,
  type MonthData,
} from "@/data/samasynch-calendar-section-data";
import Image from "next/image";

interface ActiveCalendarEntry {
  startDate: number;
  endDate?: number;
  index: number | null;
}

const SamaSynchCalendarSection = () => {
  // Months from May 2025 – April 2026
  const MONTH_KEYS = Object.keys(ACADEMIC_YEAR_2025_2026); // order is insertion order in the data file

  const [currentMonth, setCurrentMonth] = useState<string>(MONTH_KEYS[0]);
  const [activeCalendarEntry, setActiveCalendarEntry] =
    useState<ActiveCalendarEntry>({
      startDate: 0,
      endDate: 0,
      index: null,
    });

  const monthData: MonthData = ACADEMIC_YEAR_2025_2026[currentMonth];

  const prevMonth = () => {
    const monthIndex = MONTH_KEYS.indexOf(currentMonth);
    const changeIndex =
      (monthIndex - 1 + MONTH_KEYS.length) % MONTH_KEYS.length;
    setCurrentMonth(MONTH_KEYS[changeIndex]);
    setActiveCalendarEntry({
      startDate: 0,
      endDate: 0,
      index: null,
    });
  };

  const nextMonth = () => {
    const monthIndex = MONTH_KEYS.indexOf(currentMonth);
    const changeIndex =
      (monthIndex + 1 + MONTH_KEYS.length) % MONTH_KEYS.length;
    setCurrentMonth(MONTH_KEYS[changeIndex]);
    setActiveCalendarEntry({
      startDate: 0,
      endDate: 0,
      index: null,
    });
  };

  return (
    <div className="col-span-full flex justify-center mt-10">
      <div className="relative flex flex-col items-center gap-16 w-full pt-10 pb-100 px-6 sm:px-10 lg:px-16">
        {/* BACKGROUND IMAGE */}
        <div className="absolute left-1/2 top-[10%] md:top-[40%] -translate-x-1/2 h-[75vh] md:h-[70vh] lg:h-[75vh] -z-10 pointer-events-none">
          <div className="relative w-[90vw] h-full">
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

        {/* MONTH HEADER (no more semester tabs) */}
        <section className="flex items-center justify-center gap-5 w-full max-w-2xl mx-auto z-10">
          <button onClick={prevMonth}>
            <BiSolidLeftArrow
              className="hover:scale-105 text-mainblue hover:text-blue1 transition-all"
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
              className="hover:scale-105 text-mainblue hover:text-blue1 transition-all"
              size={30}
            />
          </button>
        </section>

        {/* CALENDAR + ENTRIES */}
        <section className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 w-full max-w-6xl z-10">
          {/* Calendar */}
          <div className="flex justify-center md:justify-start px-4 max-w-[315px]">
            <div
              className="
    transform 
    scale-[0.75]       
    sm:scale-[0.85]  
    md:scale-100      
    origin-top         
  "
            >
              <CalendarPicker
                month={new Date(monthData.year, monthData.index, 1)}
                dateWithEvents={monthData.dateWithEvents}
                activeEntry={{
                  startDate: activeCalendarEntry.startDate,
                  endDate: activeCalendarEntry.endDate,
                }}
              />
            </div>
          </div>

          {/* Entries */}
          <div className="flex flex-col gap-4 w-full md:flex-1 md:max-w-[800px] px-4 sm:px-8">
            {monthData.calendarEntry?.length ? (
              monthData.calendarEntry.map((sem, index) => {
                const isActive = activeCalendarEntry.index === index;

                return (
                  <CalendarEntry
                    key={index}
                    startDate={sem.startDate}
                    endDate={sem.endDate}
                    active={isActive}
                    eventName={sem.eventName}
                    className={sem.className}
                    onClick={() =>
                      setActiveCalendarEntry((prev) =>
                        prev.index === index
                          ? {
                              // deselect if clicking the same one
                              startDate: 0,
                              endDate: 0,
                              index: null,
                            }
                          : {
                              // select this one
                              startDate: sem.startDate,
                              endDate: sem.endDate,
                              index,
                            }
                      )
                    }
                  />
                );
              })
            ) : (
              <p className="text-gray-500 text-center">No events this month.</p>
            )}
          </div>
        </section>

        {/* CTA CARD */}
          <DownloadSamasynch />
      </div>
    </div>
  );
};

export default SamaSynchCalendarSection;
