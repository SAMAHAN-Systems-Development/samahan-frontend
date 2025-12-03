"use client";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import HeroBanner from "../ui/hero-banner";
import ReportCarousel from "../ui/report-carousel";

const AVAILABLE_YEARS = [2025, 2026];
const AVAILABLE_MONTHS = ["June", "July", "August"];

const MONTH_ORDER = AVAILABLE_MONTHS;

const generateMonthData = (month: string, year: number, count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${year}-${month.toLowerCase()}-${i + 1}`,
    year: year,
    month: month,
    imageSrc: `/images/monthly-reports/${month.toLowerCase()}-reports/${month}-${
      i + 1
    }.jpg`,
    altText: `${month} status report`,
  }));
};

const GALLERY_DATA = [
  ...generateMonthData("June", 2025, 44),
  ...generateMonthData("July", 2025, 30),
  ...generateMonthData("August", 2025, 37),
];

function MonthlyReportsPage() {
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const [selectedMonths, setSelectedMonths] = useState<string[]>([
    "June",
    "July",
    "August",
  ]);

  const [yearDropdownOpen, setYearDropdownOpen] = useState(false);
  const [monthDropdownOpen, setMonthDropdownOpen] = useState(false);

  const yearRef = useRef<HTMLDivElement>(null);
  const monthRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (yearRef.current && !yearRef.current.contains(event.target as Node)) {
        setYearDropdownOpen(false);
      }
      if (
        monthRef.current &&
        !monthRef.current.contains(event.target as Node)
      ) {
        setMonthDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const groupedImages = useMemo(() => {
    const yearFiltered = GALLERY_DATA.filter(
      (item) => item.year === selectedYear
    );

    const groups: Record<string, typeof GALLERY_DATA> = {};

    yearFiltered.forEach((item) => {
      if (selectedMonths.includes(item.month)) {
        if (!groups[item.month]) {
          groups[item.month] = [];
        }
        groups[item.month].push(item);
      }
    });

    return groups;
  }, [selectedYear, selectedMonths]);

  const handleMonthToggle = (month: string) => {
    if (selectedMonths.includes(month)) {
      setSelectedMonths(selectedMonths.filter((m) => m !== month));
    } else {
      setSelectedMonths([...selectedMonths, month]);
    }
  };

  const getMonthDisplayText = () => {
    if (selectedMonths.length === 0) return "None";
    if (selectedMonths.length === AVAILABLE_MONTHS.length) return "All";
    if (selectedMonths.length === 1) return selectedMonths[0];
    return "Month";
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      <HeroBanner
        imageSrc="/images/hero-images/REPORTS-Hero.png"
        imageAlt="Monthly Reports Page Hero"
        header1="MONTHLY"
        header2="STATUS REPORTS"
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-5 md:mt-12">
        <div className="flex gap-3 md:gap-8 justify-center lg:justify-end items-center mb-8 md:mb-16">
          {/* YEAR DROPDOWN */}
          <div className="flex items-center gap-4 relative z-30" ref={yearRef}>
            <label className="text-[#002075] font-extrabold text-sm uppercase tracking-widest hidden md:block">
              YEAR:
            </label>
            <div className="relative">
              <button
                onClick={() => setYearDropdownOpen(!yearDropdownOpen)}
                className={`flex items-center justify-between text-sm md:text-base w-26 md:w-28 px-2 md:px-4 py-0.5 md:py-2 bg-white border border-[#002075] text-[#002075] font-bold shadow-sm hover:bg-blue-50 transition-all ${
                  yearDropdownOpen ? "rounded-t-xl border-b-0" : "rounded-xl"
                }`}
              >
                {selectedYear}
                <ChevronDown
                  size={18}
                  className={`ml-3 transition-transform duration-200 ${
                    yearDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {yearDropdownOpen && (
                <div className="absolute top-full right-0 md:left-0 -mt-[1px] w-26 md:w-28 bg-white border border-[#002075] rounded-b-lg shadow-xl overflow-hidden py-1 z-50">
                  {AVAILABLE_YEARS.map((y) => {
                    const isSelected = selectedYear === y;
                    return (
                      <div
                        key={y}
                        onClick={() => {
                          setSelectedYear(y);
                          setYearDropdownOpen(false);
                        }}
                        className="group flex items-center justify-between px-2 md:px-4 py-0.5 md:py-2 hover:bg-gray-300 cursor-pointer transition-colors text-[#002075] font-medium"
                      >
                        <span>{y}</span>
                        <div
                          className={`w-4 h-4 border border-[#002075] rounded-[1px] flex items-center justify-center 
                            ${
                              isSelected
                                ? "bg-[#002075]"
                                : "bg-transparent group-hover:bg-mainblue/50"
                            }`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* MONTH DROPDOWN */}
          <div className="flex items-center gap-4 relative z-30" ref={monthRef}>
            <label className="text-[#002075] font-extrabold text-sm uppercase tracking-widest hidden md:block">
              MONTH:
            </label>
            <div className="relative">
              <button
                onClick={() => setMonthDropdownOpen(!monthDropdownOpen)}
                className={`flex items-center justify-between text-sm md:text-base w-34 md:w-44 px-2 md:px-4 py-0.5 md:py-2 bg-white border border-[#002075] text-[#002075] font-bold shadow-sm hover:bg-blue-50 transition-all ${
                  monthDropdownOpen ? "rounded-t-xl border-b-0" : "rounded-xl"
                }`}
              >
                {getMonthDisplayText()}
                <ChevronDown
                  size={18}
                  className={`ml-3 transition-transform duration-200 ${
                    monthDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {monthDropdownOpen && (
                <div className="absolute top-full right-0 md:left-0 -mt-[1px] w-34 md:w-44 max-h-80 overflow-y-auto bg-white border border-[#002075] rounded-b-lg shadow-xl py-1 custom-scrollbar z-50">
                  {AVAILABLE_MONTHS.map((m) => {
                    const isSelected = selectedMonths.includes(m);
                    return (
                      <div
                        key={m}
                        onClick={() => handleMonthToggle(m)}
                        className="group flex items-center justify-between px-2 md:px-4 py-0.5 md:py-2 hover:bg-gray-300 cursor-pointer transition-colors text-[#002075] font-medium"
                      >
                        <span>{m}</span>
                        <div
                          className={`w-4 h-4 border border-[#002075] rounded-[1px] flex items-center justify-center
                            ${
                              isSelected
                                ? "bg-[#002075]"
                                : "bg-transparent group-hover:bg-mainblue/50"
                            }`}
                        ></div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {MONTH_ORDER.map((monthName) => {
            const items = groupedImages[monthName];

            if (!items || items.length === 0) return null;

            return (
              <ReportCarousel
                key={monthName}
                month={monthName}
                year={selectedYear}
                items={items}
              />
            );
          })}

          {Object.keys(groupedImages).length === 0 && (
            <div className="text-center">
              <p className=" md:text-xl font-semibold text-gray-400">No reports.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MonthlyReportsPage;