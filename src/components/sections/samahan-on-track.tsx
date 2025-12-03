"use client";
import React from "react";
import { ArrowRight, ArrowDown, Check, Plus } from "lucide-react";
import TabHeader from "../ui/tab-header";
import Image from "next/image";
import Link from "next/link";

export default function OnTrack() {
  //fallbacks for special characters
  const LPAREN = <span className="font-['Arial'] inline">&#40;</span>;
  const RPAREN = <span className="font-['Arial'] inline">&#41;</span>;
  const COLON = <span className="font-['Arial'] inline">&#58;</span>;
  const QUOTE = <span className="font-['Arial'] inline">&quot;</span>;
  const NDASH = <span className="font-['Arial'] inline">&ndash;</span>;
  const PLUS_SIGN = <span className="font-['Arial'] inline">&#43;</span>;
  const AMPERSAND = <span className="font-['Arial'] inline">&#38;</span>;
  const SLASH = <span className="font-['Arial'] inline">&#47;</span>;
  const APOSTROPHE = <span className="font-['Arial'] inline">&#39;</span>;
  const LBRACKET = <span className="font-['Arial'] inline">&#91;</span>;
  const RBRACKET = <span className="font-['Arial'] inline">&#93;</span>; 

  const stepsRow1 = [
    "crafting of concept paper",
    "submission to google forms",
    "review by program officer",
    "sending of confirmation email to moderator",
  ];

  const stepsRow2 = [
    "endorsement of moderator",
    "recommendation for approval of event",
    "approval of OSA director",
    <>
    <span>
    post event{COLON} process kukang
    </span>
    </>
  ];

  const stepsRow1_2 = [
    "crafting of concept paper",
    "submission to google forms",
    "review by program officer",
    "sending of confirmation email to moderator",
  ];

  // Updated to 5 steps based on the screenshot
  const stepsRow2_2 = [
    "endorsement of moderator",
    "recommendation for approval of event",
    "approval of OSA director",
    "processing of CHED documents",
    "post event: submission of KUKANG report",
  ];

  const venueData = [
    { venue: "Arrupe Hall", office: "OSA" },
    {
      venue: (
        <>
          Classrooms {LPAREN}Activity Period{RPAREN}
        </>
      ),
      office: "OSA",
    },
    { venue: "Finster Auditorium", office: "PPO" },
    { venue: "F213 Multi-Purpose Room", office: "PPO" },
    { venue: "Bapa Benny Tudtud Auditorium", office: "PPO" },
    {
      venue: (
        <>
          CCFC Building {LPAREN}3rd floor{RPAREN}
        </>
      ),
      office: (
        <>
          Ma&apos;am Su&apos;s office {LPAREN}9th floor{RPAREN}
        </>
      ),
    },
    {
      venue: (
        <>
          CCFC Building {LPAREN}8th floor{RPAREN}
        </>
      ),
      office: "UCEAC",
    },
    { venue: "Miguel Pro Learning Commons", office: "Miguel Pro library" },
    {
      venue: (
        <>
          Martin Hall {LPAREN}4th floor{RPAREN}
        </>
      ),
      office: "Athletics Office",
    },
    {
      venue: (
        <>
          Classrooms {LPAREN}Regular school days{RPAREN}
        </>
      ),
      office: "Registrar's Office",
    },
  ];

  const submissionSteps = [
    "event proper",
    "crafting of KUKANG report",
    "submission to program officer's email",
    <>
      <span>use header{QUOTE}{LBRACKET}KUKANG REPORT{RBRACKET} Club Name, Name of Event{QUOTE}</span>
    </>,
  ];

  const reminderSteps = [
    "use club email",
    "submit after every email", // Note: Transcribed from image, though contextually might mean "event"
    <>
    <span>always CC {LPAREN}carbon copy{RPAREN} COA-D{APOSTROPHE}s email</span>
    </>
  ];

  // Shared classes for consistency
  const boxClasses =
    "w-full border-2 border-[#3b5998] bg-white flex items-center justify-center min-h-[5rem] px-4 text-center text-[#3b5998] text-sm font-medium z-10 p-4";
  const arrowColor = "text-[#3b5998]";

  const indent_1 = "lg:ml-5.5";
  const indent_2 = "ml-11";
  const indent_3 = "ml-11 lg:ml-16";

  return (
    <div className="text-mainblue font-formular-regular text-sm sm:text-base">
      <TabHeader name="SAMAHAN ON TRACK" />
      <div className="px-4 lg:px-0">
        <div>
          <div className="mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Student Activities
          </div>
          <div className="mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-3xl">
            Student Activities
          </div>
          <ul className={`${indent_2} list-disc mt-3`}>
            <li>student-led initiatives</li>
            <li>passion and advocacy projects</li>
            <li>income generating projects</li>
            <li>general assemblies</li>
            <li>academic and non-academic related activities</li>
          </ul>
          <div className={`mt-5 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0`}>
            <div className="flex-1">
              <div
                className={`${indent_1} ml-5.5 text-xl lg:text-lg lg:font-semibold`}
              >
                Co-Curricular
              </div>
              <div className={`${indent_2} mt-1`}>
                activities concerned with the improvement and enhancement of the
                academic experience.
              </div>
            </div>
            <div className="flex-1">
              <div
                className={`${indent_1} ml-5.5 text-xl lg:text-lg lg:font-semibold`}
              >
                Extra-Curricular
              </div>
              <div className={`${indent_2} mt-1`}>
                activities following these areas{COLON} community service,
                sports and games, cultural, social, special projects and
                spiritual
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div
              className={`lg:ml-5.5 text-2xl lg:text-lg font-formular-medium`}
            >
              Concept Paper
            </div>
            <div className={`ml-5.5 lg:ml-11 mt-1`}>
              proposal of project overview of planned activity important
              document the blood of the activity framework of plans contains
              important details
            </div>
          </div>
          <div className="mt-8">
            <div
              className={`${indent_1} text-2xl lg:text-lg font-formular-medium`}
            >
              Process of Approval for Off-Campus Activities
            </div>
            <div className="w-full mx-auto p-4 md:p-10">
              {/* ROW 1 */}
              {/* Added mb-20 to create space for the connector */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 relative mb-3 lg:mb-22 ">
                {stepsRow1.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative group"
                  >
                    <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-[15px] font-medium z-10">
                      {step}
                    </div>

                    {index !== stepsRow2.length - 1 && (
                      <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                        <ArrowRight size={24} />
                      </div>
                    )}

                    {index !== stepsRow2.length - 1 && (
                      <div className="lg:hidden mt-3 text-[#3b5998]">
                        <ArrowDown size={24} />
                      </div>
                    )}

                    {index == stepsRow2.length - 1 && (
                      <div className="block lg:hidden mt-3 text-[#3b5998]">
                        <ArrowDown size={24} />
                      </div>
                    )}
                  </div>
                ))}

                {/* --- CUSTOM CONNECTOR (Desktop Only) --- */}
                {/* Positioned absolutely at the bottom of Row 1, extending down into the gap */}
                <div className="hidden lg:block absolute left-0 -bottom-20 w-full h-20 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible">
                    <defs>
                      <marker
                        id="arrowhead-down"
                        markerWidth="10"
                        markerHeight="7"
                        refX="5"
                        refY="3.5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 3.5, 0 7" fill="#3b5998" />
                      </marker>
                    </defs>

                    {/* We use <line> elements because they accept percentages (%).
                          Grid logic: 4 cols. 
                          Center of last col (4th) is approx ~87.5% width.
                          Center of first col (1st) is approx ~12.5% width.
                        */}

                    {/* 1. Vertical Line Down from Row 1, Item 4 */}
                    <line
                      x1="87.5%"
                      y1="0"
                      x2="87.5%"
                      y2="50%"
                      stroke="#3b5998"
                      strokeWidth="2"
                    />

                    {/* 2. Horizontal Line Across (Right to Left) */}
                    <line
                      x1="87.5%"
                      y1="50%"
                      x2="12.5%"
                      y2="50%"
                      stroke="#3b5998"
                      strokeWidth="2"
                    />

                    {/* 3. Vertical Line Down to Row 2, Item 1 */}
                    <line
                      x1="12.5%"
                      y1="50%"
                      x2="12.5%"
                      y2="100%"
                      stroke="#3b5998"
                      strokeWidth="2"
                      markerEnd="url(#arrowhead-down)"
                    />
                  </svg>
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
                {stepsRow2.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center relative group"
                  >
                    <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-[15px] font-medium z-10">
                      {step}
                    </div>

                    {index !== stepsRow2.length - 1 && (
                      <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                        <ArrowRight size={24} />
                      </div>
                    )}

                    {index !== stepsRow2.length - 1 && (
                      <div className="lg:hidden mt-4 text-[#3b5998]">
                        <ArrowDown size={24} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Venues
          </div>
          <div className="mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Venues
          </div>
          <div className="mt-3">
            <div className={`${indent_1} text-xl lg:text-lg lg:font-semibold`}>
              Classification of Venues
            </div>
            <ul className={`${indent_3} list-disc`}>
              <li>in campus</li>
              <li>off campus</li>
              <li>online</li>
            </ul>
          </div>
          <div className="mt-3">
            <div className={`${indent_1} text-xl lg:text-lg lg:font-semibold`}>
              In-Campus Activities and Venues
            </div>
            <ol className={`${indent_3} list-decimal`}>
              <li>submitted at least 10 days before the event date</li>
              <li>always check the concept paper before submission</li>
              <li>have it checked by your moderator and consult</li>
              <li>OSA does not reserve ALL venues in the University</li>
              <li>always coordinate with other offices and be polite</li>
            </ol>
          </div>
          <div className="w-full flex justify-center items-center mt-3 text-black">
            {/* Outer container: No border here anymore, we rely on the cell borders */}
            <div className="overflow-x-auto w-full max-w-4xl mx-auto">
              <table className="min-w-full bg-white border-collapse">
                <tbody>
                  {venueData.map((item, index) => (
                    <tr key={index}>
                      {/* Venue Column: Needs Top, Bottom, Left, and Right borders */}
                      <td className="py-3 px-4 text-sm text-center font-medium border-2 border-black">
                        {item.venue}
                      </td>
                      {/* Office Column: Needs Top, Bottom, and Right borders */}
                      <td className="py-3 px-4 text-sm text-center border-2 border-black">
                        {item.office}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Off-Campus Activities and Venues
          </div>
          <div className="mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Off-Campus Activities and Venues
          </div>
          <ol className={`${indent_3} list-decimal mt-2`}>
            <li>submitted at least 20 days before the event date</li>
            <li>
              submit CHED requirements at least 10 days before the event date
            </li>
            <li>always check the concept paper before submission</li>
            <li>have it checked by your moderator and consult</li>
            <li>OSA does not reserve ALL venues in the University</li>
            <li>always include the letter of invitation</li>
            <li>
              process and comply the CHED requirements {LPAREN}CHED Memo 63,
              series of 2017{RPAREN}
            </li>
          </ol>
        </div>

        <div>
          <div className="mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Sponsorship Guide
          </div>
          <div className="mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-3xl">
            Sponsorship Guide
          </div>
          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 1
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 1
          </div>
          <div className={`${indent_2} mt-3`}>Income generating projects</div>
          <div className={`${indent_2} mt-1`}>
            SAMAHAN Sponsorship and Support
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-50 xs:h-70 lg:w-160 lg:h-112 relative flex justify-center items-center mt-3 ">
              <Image
                src="/images/on-track/phase-1.png"
                alt="phase 1"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table
              // Use border-2 and border-black for the outer frame
              className="min-w-full bg-white border-collapse border-2 border-black"
            >
              <thead>
                <tr className="">
                  <th
                    className="py-3 px-4 text-left text-[13px] xs:text-sm font-bold tracking-wider border-r-2 border-black" // Use border-r-2 for the vertical header separator
                    style={{ width: "30%" }} // Keep style for column width
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 text-left text-[13px] xs:text-sm font-bold tracking-wider"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Directors --- */}
                <tr className="border-t-2 border-black">
                  <td className="py-4 px-4 align-center text-[13px] xs:text-sm font-medium border-r-2 border-black">
                    <ul className="list-disc ml-3 sm:ml-10 space-y-1">
                      <li className="pl-1">Directors</li>
                    </ul>
                  </td>

                  <td className="py-4 px-4 align-top text-[13px] xs:text-sm">
                    <ol className="list-decimal ml-6 space-y-2">
                      <li className="pl-1">
                        Meeting for General Objectives with Main TWG
                        {/* Nested List a, b, c */}
                        <ol className="list-lower-alpha list-outside pl-6 mt-1">
                          <li className="pl-1">a. Timeline of Event</li>
                          <li className="pl-1">
                            b. Needs and Wants of Main TWG for the Event
                          </li>
                          <li className="pl-1">
                            c. Planned Activities for the Event
                          </li>
                        </ol>
                      </li>
                      <li className="pl-1">
                        Meeting with Outsourcing and Media for Specific Packages
                      </li>
                      <li className="pl-1">
                        Meeting with Executives for Comments, Suggestions, and
                        Approval
                      </li>
                      <li className="pl-1">Assigning of Project Heads</li>
                      <li className="pl-1">
                        Crafting of Matrix with Project Heads
                      </li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 2: Legal Team & Project Heads --- */}
                <tr className="border-t-2 border-black">
                  <td className="py-4 px-4 align-top text-[13px] xs:text-sm font-medium border-r-2 border-black">
                    <ul className="list-disc ml-3 sm:ml-10 space-y-1">
                      <li className="pl-1">Legal Team</li>
                      <li className="pl-1">Project Heads</li>
                    </ul>
                  </td>

                  <td className="py-4 px-4 align-top text-[13px] xs:text-sm">
                    <ol className="list-decimal ml-6 space-y-2">
                      <li className="pl-1">
                        Make Contract Templates for the packages.
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="w-full text-black">
            {/* ================= MOBILE VIEW (Visible < sm) ================= */}
            {/* This uses CSS Grid to create the 4x2 layout */}
            <div className="block sm:hidden border-2 border-black bg-white">
              {/* Row 1: Headers */}
              <div className="grid grid-cols-2 border-b-2 border-black">
                <div className="p-3 text-sm font-bold border-r-2 border-black flex items-center">
                  Sponsorship Tier
                </div>
                <div className="p-3 text-sm font-bold flex items-center">
                  <span>
                    Accumulated Worth {LPAREN}Cash {AMPERSAND} Equivalent
                    {RPAREN}
                  </span>
                </div>
              </div>

              {/* Row 2: Blue Knight */}
              <div className="grid grid-cols-2 border-b-2 border-black">
                <div className="p-3 text-sm font-bold text-left border-r-2 border-black ">
                  <span>
                    BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                  </span>
                </div>
                <div className="p-3 text-sm flex items-center text-left">
                  <span>
                    Php 20,000 and above {LPAREN}Php 20,000 Cash {PLUS_SIGN}{" "}
                    Cash Equivalents
                    {RPAREN}
                  </span>
                </div>
              </div>

              {/* Row 3: Rockstar */}
              <div className="grid grid-cols-2 border-b-2 border-black">
                <div className="p-3 text-sm font-bold text-left border-r-2 border-black ">
                  <span>
                    ROCKSTAR {LPAREN}Booth{RPAREN}
                  </span>
                </div>
                <div className="p-3 text-sm flex items-center text-left">
                  <span>
                    Php 18,000 - Php 19,999 {LPAREN}Cash only{RPAREN}
                  </span>
                </div>
              </div>

              {/* Row 4: Booster */}
              <div className="grid grid-cols-2">
                <div className="p-3 text-sm font-bold text-left border-r-2 border-black ">
                  <span>
                    BOOSTER {LPAREN}Non-Booth{RPAREN}
                  </span>
                </div>
                <div className="p-3 text-sm flex items-center text-left">
                  <span>
                    Php 10,000 - Php 17,999 {LPAREN}Cash and{SLASH}or Cash
                    Equivalents
                    {RPAREN}
                  </span>
                </div>
              </div>
            </div>

            {/* ================= DESKTOP VIEW (Visible ≥ sm) ================= */}
            {/* Your original table code, now hidden on small screens */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="min-w-full bg-white border-collapse border-2 border-black">
                <thead>
                  <tr>
                    <th
                      className="py-3 px-4 text-left text-sm font-bold tracking-wider border-r-2 border-black"
                      style={{ width: "25%" }}
                    >
                      Sponsorship Tier
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold tracking-wider border-r-2 border-black"
                      style={{ width: "25%" }}
                    >
                      BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold tracking-wider border-r-2 border-black"
                      style={{ width: "25%" }}
                    >
                      ROCKSTAR {LPAREN}Booth{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold tracking-wider"
                      style={{ width: "25%" }}
                    >
                      BOOSTER {LPAREN}Non-Booth{RPAREN}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-t-2 border-black">
                      Accumulated Worth Of Sponsorship {LPAREN}Cash {AMPERSAND}{" "}
                      Cash Equivalent{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-t-2 border-black">
                      Php 20,000 and above {LPAREN}Php 20,000 Cash {PLUS_SIGN}{" "}
                      Cash Equivalents{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-t-2 border-black">
                      Php 18,000 - Php 19,999 {LPAREN}Cash only{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-t-2 border-black">
                      Php 10,000 - Php 17,999 {LPAREN}Cash and{SLASH}or Cash
                      Equivalents{RPAREN}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div
            className={`text-xl lg:text-lg lg:font-extrabold uppercase lg:font-formular my-3`}
          >
            Promotions
          </div>

          <div className="w-full text-black">
            {/* --- MOBILE VIEW (Promotions) --- */}
            <div className="block lg:hidden space-y-8">
              {/* CARD 1: BLUE KNIGHT */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  <span>
                    BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                  </span>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    <span>
                      Company logo on promotion collaterals {LPAREN}Facebook
                      Page
                      {RPAREN}
                    </span>
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    Largest possible size
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Space Opportunity at Arrupe Hall
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    <span>
                      Booth {LPAREN}2x3m{RPAREN}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Certificate of Appreciation
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* CARD 2: ROCKSTAR */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  ROCKSTAR {LPAREN}Booth{RPAREN}
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Company logo on promotion collaterals {LPAREN}Facebook Page
                    {RPAREN}
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    2nd largest possible size
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Space Opportunity at Arrupe Hall
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    Booth {LPAREN}2x3m{RPAREN}
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Certificate of Appreciation
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* CARD 3: BOOSTER */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  BOOSTER {LPAREN}Non-Booth{RPAREN}
                </div>

                {/* Row 1 */}
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Company logo on promotion collaterals {LPAREN}Facebook Page
                    {RPAREN}
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    3rd largest possible size
                  </div>
                </div>

                {/* Row 2: THE FIX IS APPLIED HERE */}
                <div className="grid grid-cols-2 border-b-2 border-black">
                  {/* Left Column: Keep flex if you want vertical centering here */}
                  <div className="p-3 text-sm font-medium border-r-2 border-black flex items-center">
                    Space Opportunity at Arrupe Hall
                  </div>

                  {/* Right Column: CHANGED */}
                  {/* 1. Removed 'flex items-center' */}
                  {/* 2. Added 'block' to allow natural flow */}
                  {/* 3. Added 'break-words' to force wrapping */}
                  <div className="p-3 text-sm block break-words">
                    One {LPAREN}1{RPAREN} Vertical Streamer {LPAREN}3ft by 5ft
                    to be provided by the company{SLASH}organization{RPAREN}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Certificate of Appreciation
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* --- DESKTOP VIEW (Promotions) --- */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full bg-white border-collapse border-2 border-black">
                <thead>
                  {/* Sub-Header Row: NO BACKGROUND COLOR */}
                  <tr>
                    <th
                      className="py-3 px-4 text-left text-sm font-bold  tracking-wider border-r-2 border-black"
                      style={{ width: "40%" }}
                    >
                      Sponsorship Tier
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold  tracking-wider border-r-2 border-black"
                      style={{ width: "20%" }}
                    >
                      BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold  tracking-wider border-r-2 border-black"
                      style={{ width: "20%" }}
                    >
                      ROCKSTAR {LPAREN}Booth{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold tracking-wider"
                      style={{ width: "20%" }}
                    >
                      BOOSTER {LPAREN}Non-Booth{RPAREN}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: Company Logo */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Company logo on promotion collaterals {LPAREN}Facebook
                      Page{RPAREN} for the Sadya on SAMAHAN Official FB Page.
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Largest possible size
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      2nd largest possible size
                    </td>
                    <td className="py-3 px-4 text-left text-sm">
                      3rd largest possible size
                    </td>
                  </tr>
                  {/* Row 2: Space Opportunity */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Space Opportunity at Arrupe Hall for three {LPAREN}3
                      {RPAREN} days September 26{NDASH}28, 2024.
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Booth {LPAREN}2x3m{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Booth {LPAREN}2x3m{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm">
                      One {LPAREN}1{RPAREN} Vertical Streamer {LPAREN}3ft by 5ft
                      to be provided by the company/organization{RPAREN}
                    </td>
                  </tr>
                  {/* Row 3: Certificate */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Certificate of Appreciation
                    </td>
                    <td className="font-sans py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ==================== ADVERTISEMENTS SECTION ==================== */}
          <div
            className={`text-xl lg:text-lg lg:font-extrabold uppercase lg:font-formular my-3`}
          >
            Advertisements
            <span className="text-xl lg:text-lg lg:font-extrabold mt-1 lg:mt-0">
              {" "}
              ON ALL SAMAHAN AND SAMAHAN SPONSORSHIPS SOCIAL MEDIA PLATFORMS:
              FACEBOOK, INSTAGRAM, AND TIKTOK
            </span>
          </div>

          <div className="w-full text-black">
            {/* --- MOBILE VIEW (Advertisements) --- */}
            <div className="block lg:hidden space-y-8">
              {/* CARD 1: BLUE KNIGHT */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  <span>
                    BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                  </span>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Carousel Post
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    Logo <Plus className="inline w-3 h-3 mx-1" /> 3 Photos
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Video Advertisement
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    30s to 1min Video Ad
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Happening Now
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Post-Event Recognition
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    User Generated Content
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    <span>
                      Two {LPAREN}2{RPAREN} Videos {LPAREN}solo ad and all
                      sponsors in one video{RPAREN}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 2: ROCKSTAR */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  ROCKSTAR {LPAREN}Booth{RPAREN}
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Carousel Post
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    Logo <Plus className="inline w-3 h-3 mx-1" /> 3 Photos
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Video Advertisement
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Happening Now
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Post-Event Recognition
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    User Generated Content
                  </div>
                  <div className="p-3 text-sm flex items-center">
                    <span>
                      One {LPAREN}1{RPAREN} Video {LPAREN}all sponsors in one
                      video{RPAREN}
                    </span>
                  </div>
                </div>
              </div>

              {/* CARD 3: BOOSTER */}
              <div className="border-2 border-black bg-white">
                <div className="p-3 text-sm font-bold text-center border-b-2 border-black bg-white">
                  BOOSTER {LPAREN}Non-Booth{RPAREN}
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Carousel Post
                  </div>
                  <div className="p-3 text-sm flex items-center">Logo</div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Video Advertisement
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Happening Now
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b-2 border-black">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    Post-Event Recognition
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="p-3 text-sm font-medium border-r-2 border-black">
                    User Generated Content
                  </div>
                  <div className="p-3 text-xl flex items-center">
                    <Check className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* --- DESKTOP VIEW (Advertisements) --- */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="min-w-full bg-white border-collapse border-2 border-black">
                <thead>
                  {/* Sub-Header Row: NO BACKGROUND COLOR */}
                  <tr>
                    <th
                      className="py-3 px-4 text-left text-sm font-bold uppercase tracking-wider border-r-2 border-black"
                      style={{ width: "40%" }}
                    >
                      {/* Empty header cell */}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold  tracking-wider border-r-2 border-black"
                      style={{ width: "20%" }}
                    >
                      BLUE KNIGHT {LPAREN}Co-Presenter{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold  tracking-wider border-r-2 border-black"
                      style={{ width: "20%" }}
                    >
                      ROCKSTAR {LPAREN}Booth{RPAREN}
                    </th>
                    <th
                      className="py-3 px-4 text-center text-sm font-bold  tracking-wider"
                      style={{ width: "20%" }}
                    >
                      BOOSTER {LPAREN}Non-Booth{RPAREN}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* Row 1: Carousel Post */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Carousel Post {LPAREN}Products{SLASH}Services of the
                      Entity{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Logo{" "}
                      <Plus className="inline w-3 h-3  align-middle mx-1" /> 3
                      Photos
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Logo{" "}
                      <Plus className="inline w-3 h-3  align-middle mx-1" /> 3
                      Photos
                    </td>
                    <td className="py-3 px-4 text-left text-sm">Logo</td>
                  </tr>
                  {/* Row 2: Video Ad */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Video Advertisement {LPAREN}Products{SLASH}Services of the
                      Entity{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      30s to 1min Video Ad
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                  </tr>
                  {/* Row 3: Happening Now */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Happening Now {LPAREN}applicable if booth{SLASH}standee is
                      availed{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                  </tr>
                  {/* Row 4: Post-Event Recognition */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      Post-Event Sponsor Recognition
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                  </tr>
                  {/* Row 5: User Generated Content */}
                  <tr className="border-t-2 border-black">
                    <td className="py-3 px-4 text-left text-sm font-medium border-r-2 border-black">
                      User Generated Content
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      Two {LPAREN}2{RPAREN} Videos {LPAREN}solo ad and all
                      sponsors in one video{RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-sm border-r-2 border-black">
                      One {LPAREN}1{RPAREN} Video {LPAREN}all sponsors in one
                      video
                      {RPAREN}
                    </td>
                    <td className="py-3 px-4 text-left text-xl border-r-2 border-black">
                      <Check className="inline w-6 h-6 text-black" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 2
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 2
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-30 xs:h-44 md:h-60 lg:w-200 lg:h-112 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-2.png"
                alt="phase 2"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-black">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-6 text-left text-[13px] xs:text-sm font-bold border-r-2 border-b-2 border-black"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-6 text-left text-[13px] xs:text-sm font-bold border-b-2 border-black"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Row with Orange Background */}
                <tr className="bg-[#FFBD59]">
                  {/* Column 1: Bulleted List */}
                  <td className="py-6 px-6 align-center text-[13px] xs:text-sm font-medium border-r-2 border-black">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Secretariat</li>
                      <li>Project Heads</li>
                    </ul>
                  </td>

                  {/* Column 2: Ordered List with Nested Alpha List */}
                  <td className="py-6 px-6 align-top text-[13px] xs:text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Project Heads will collate the specific plans needed for
                        the Concept Paper.
                      </li>
                      <li className="pl-1">
                        Secretariat will make the Concept Paper within 3-4 days.
                      </li>
                      <li className="pl-1">
                        Project Heads must pass the Concept Paper by the 5th day
                        before the week ends.
                        {/* Nested List */}
                        <ol className="list-[lower-alpha] list-outside pl-5 mt-1">
                          <li className="pl-1">
                            This will ensure a week of waiting period for
                            approval.
                          </li>
                        </ol>
                      </li>
                      <li className="pl-1">
                        Right after the approval of the Concept Paper,
                        Secretariat will work on the venue reservation.
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 3
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 3
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-80 md:h-100 lg:w-200 lg:h-180 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-3.png"
                alt="phase 3"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-black">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-[13px] xs:text-sm font-bold border-r-2 border-b-2 border-black"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-[13px] xs:text-sm font-bold border-b-2 border-black"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Blue Background --- */}
                <tr className="bg-[#38B6FF] border-2 border-black">
                  {/* Column 1 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium border-r-2 border-black">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Outsourcing</li>
                      <li>Project Heads</li>
                    </ul>

                    <div className={`xs:ml-11 mt-4 mb-2`}>
                      In close coordination with:
                    </div>

                    <ul
                      className={`xs:ml-11 list-disc list-outside pl-4 space-y-1`}
                    >
                      <li>Directors</li>
                      <li>Legal</li>
                      <li>Secretariat</li>
                      <li>Finance</li>
                    </ul>
                  </td>

                  {/* Column 2 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Project Heads will pass on the sponsorship letter to the
                        Outsourcing Team.
                      </li>
                      <li className="pl-1">
                        Outsourcing team will prepare the GForms for
                        requirement.
                      </li>
                      <li className="pl-1">
                        After initial preparation, contacting of Sponsors will
                        begin with aid from Secretariat.
                        {/* Nested List */}
                        <ol className="list-[lower-alpha] list-outside xs:pl-5 mt-1">
                          <li className="pl-1">Negotiation Phase</li>
                        </ol>
                      </li>
                      <li className="pl-1">
                        Checking of requirements will be done by Outsourcing
                        Team in close coordination with the Legal Team.
                      </li>
                      <li className="pl-1">
                        Signing of MOA will be done by Outsourcing Team in close
                        coordination with the Legal Team and Finance Team.
                      </li>
                    </ol>
                    <p className="mt-4">
                      Note{COLON} Only the Outsourcing Team are allowed to
                      contact the Sponsors.
                    </p>
                  </td>
                </tr>

                {/* --- Row 2: Pink Background (White Text) --- */}
                <tr className="bg-[#D84BAC] text-white">
                  {/* Column 1 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium border-r-2 border-black">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Finance</li>
                      <li>Outsourcing</li>
                    </ul>
                  </td>

                  {/* Column 2 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Outsourcing will endorse the Sponsor to the Finance
                        Team.
                      </li>
                      <li className="pl-1">
                        Finance Team will collect the Downpayment.
                      </li>
                    </ol>
                    <p className="mt-4">
                      Note{COLON} Finance Team are allowed to directly contact
                      the Sponsor but only for Payment Inquiries.
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 4
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 4
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-60 sm:h-120 lg:w-220 lg:h-200 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-4.png"
                alt="phase 4"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-mainblue">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-[13px] xs:text-sm font-bold border-r-2 border-b-2 border-mainblue"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-[13px] xs:text-sm font-bold border-b-2 border-mainblue"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Yellow Background --- */}
                <tr className="bg-[#FFDD57]">
                  {/* Column 1 */}
                  {/* Added border-b-2 border-black for the horizontal separator */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium border-r-2 border-mainblue border-b-2 border-black">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Operations</li>
                      <li>Project Heads</li>
                    </ul>

                    <div className={`xs:ml-11 mt-4 mb-2`}>
                      In close coordination with{COLON}
                    </div>

                    <ul
                      className={`xs:ml-11 list-disc list-outside pl-4 space-y-1`}
                    >
                      <li>Directors</li>
                      <li>Secretariat</li>
                      <li>Outsourcing</li>
                    </ul>
                  </td>

                  {/* Column 2 */}
                  {/* Added border-b-2 border-black here too */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium border-b-2 border-black">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Project Heads will pass on the Sponsor Documents to the
                        Operations Team.
                      </li>
                      <li className="pl-1">
                        Simultaneously, Operations Team will make{COLON}
                        {/* Nested List */}
                        <ol className="list-[lower-alpha] list-outside xs:ml-11 mt-1">
                          <li className="pl-1">
                            The Entry Pass in close coordination with the
                            Outsourcing Team
                          </li>
                          <li className="pl-1">
                            Equipment Request in close coordination with the
                            Secretariat Team
                          </li>
                        </ol>
                      </li>
                      <li className="pl-1">
                        The passing of documents will be made by the Operations
                        Team or the Project Heads only.
                      </li>
                    </ol>
                    <p className="mt-4">
                      Note{COLON} 1 week worth of days for waiting period.
                    </p>
                  </td>
                </tr>

                {/* --- Row 2: Teal Background --- */}
                <tr className="bg-[#83D7D8]">
                  {/* Column 1 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-[13px] xs:text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Creatives Team</li>
                      <li>Media Team</li>
                      <li>Project Heads</li>
                    </ul>

                    <div className={`xs:ml-11 mt-4 mb-2`}>
                      In close coordination with{COLON}
                    </div>

                    <ul
                      className={`xs:ml-11 list-disc list-outside pl-4 space-y-1`}
                    >
                      <li>Directors</li>
                      <li>Legal Team</li>
                      <li>Event Analyst</li>
                    </ul>
                  </td>

                  {/* Column 2 */}
                  <td className="py-6 px-4 sm:px-6 align-center text-[13px] xs:text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Review of Obligations with the Legal Team and Event
                        Analyst.
                      </li>
                      <li className="pl-1">Branding Meeting with Main TWG.</li>
                      <li className="pl-1">
                        Marketing Scheme with the close coordination of the
                        Legal Team and Event Analyst.
                      </li>
                      <li className="pl-1">
                        Postings with the close coordination of the Event
                        Analyst Team.
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 5
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 5
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-30 xs:h-45 lg:w-220 lg:h-100 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-5.png"
                alt="phase 5"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-mainblue">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-r-2 border-b-2 border-mainblue"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-b-2 border-mainblue"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Pink Background (White Text) --- */}
                <tr className="bg-[#D84BAC] text-white">
                  {/* Column 1 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Finance Team</li>
                      <li>Project Heads</li>
                    </ul>

                    <div className={`xs:ml-11 mt-4 mb-2`}>
                      In close coordination with{COLON}
                    </div>

                    <ul
                      className={`xs:ml-11 list-disc list-outside pl-4 space-y-1`}
                    >
                      <li>Directors</li>
                      <li>Operations</li>
                      <li>Legal Team</li>
                    </ul>
                  </td>

                  {/* Column 2 */}
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Collection of Full Payment in close coordination with
                        Operations and Legal Team
                      </li>
                    </ol>

                    <div className="mt-4">
                      Note{COLON}
                      <ul className="list-disc list-outside pl-5 mt-1 space-y-1">
                        <li>Termination must be reviewed by the Legal Team</li>
                        <li>
                          A Grace Period is allowed until 2 weeks after event
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 6
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 6
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-45 xs:h-70 lg:w-220 lg:h-100 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-6.png"
                alt="phase 6"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-mainblue">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-r-2 border-b-2 border-mainblue"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-b-2 border-mainblue"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Yellow Background --- */}
                <tr className="bg-[#FFDE59] border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Operations</li>
                      <li>Project Heads</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Monitoring Smooth Operations</li>
                      <li className="pl-1">Egress</li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 2: Pink Background (White Text) --- */}
                <tr className="bg-[#D84BAC] text-white border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Finance</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Billing of OPEX</li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 3: Teal Background --- */}
                <tr className="bg-[#85DBD9] border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Media Team</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Posting</li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 4: Purple Background (White Text) --- */}
                <tr className="bg-[#605DC8] text-white">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Event Analysis</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Documentation</li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-regular lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Phase 7
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            Phase 7
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full h-30 xs:h-40 sm:h-60 md:h-70 lg:w-270 lg:h-130 relative flex justify-center items-center">
              <Image
                src="/images/on-track/phase-7.png"
                alt="phase 7"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <div className="overflow-x-auto w-full mx-auto my-8 text-black">
            <table className="min-w-full border-collapse border-2 border-mainblue">
              <thead>
                <tr className="bg-white">
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-r-2 border-b-2 border-mainblue"
                    style={{ width: "30%" }}
                  >
                    Committee{LPAREN}s{RPAREN} Involved
                  </th>
                  <th
                    className="py-3 px-4 sm:px-6 text-left text-sm font-bold border-b-2 border-mainblue"
                    style={{ width: "70%" }}
                  >
                    Specific Checklists
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* --- Row 1: Pink Background (White Text) --- */}
                <tr className="bg-[#D84BAC] text-white border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Finance</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Finance will pay the OPEX.</li>
                      <li className="pl-1">
                        Contact sponsors who asked for grace period.
                      </li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 2: Teal Background --- */}
                <tr className="bg-[#85DBD9] border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Media Team</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">Days after the Event</li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 3: Purple Background (White Text) --- */}
                <tr className="bg-[#605DC8] text-white border-b-2 border-mainblue">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Event Analysis</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        Sponsorship Report 3 Weeks after Event
                      </li>
                    </ol>
                  </td>
                </tr>

                {/* --- Row 4: Light Pink Background --- */}
                <tr className="bg-[#FAD2F4]">
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium border-r-2 border-mainblue">
                    <ul className="list-disc list-outside pl-4 space-y-1">
                      <li>Directors</li>
                    </ul>

                    <div className={`xs:ml-11 mt-4 mb-2`}>
                      In close coordination with{COLON}
                    </div>

                    <ul
                      className={`xs:ml-11 list-disc list-outside pl-4 space-y-1`}
                    >
                      <li>Legal</li>
                      <li>Outsourcing</li>
                      <li>Finance</li>
                    </ul>
                  </td>
                  <td className="py-6 px-4 sm:px-6 align-top text-sm font-medium">
                    <ol className="list-decimal list-outside pl-4 space-y-1">
                      <li className="pl-1">
                        After the confirmation of non-compliance by the Sponsor,
                        a meeting will be scheduled with{COLON}
                        {/* Nested List */}
                        <ol className="list-[lower-alpha] list-outside xs:pl-5 mt-1">
                          <li className="pl-1">Legal</li>
                          <li className="pl-1">Outsourcing</li>
                          <li className="pl-1">Finance</li>
                        </ol>
                      </li>
                      <li className="pl-1">
                        The Blacklisting will be confirmed.
                      </li>
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            CHED MEMO 63, SERIES OF 2017: POLICIES AND GUIDELINES FOR LOCAL
            OFF-CAMPUS ACTIVITIES
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            CHED MEMO 63, SERIES OF 2017: POLICIES AND GUIDELINES FOR LOCAL
            OFF-CAMPUS ACTIVITIES
          </div>
          <ul className={`${indent_3} list-disc mt-4`}>
            <li>approved concept paper</li>
            <li>list of participants</li>
            <li>parents consent</li>
            <li>barangay clearance</li>
            <li>police clearance</li>
            <li>drivers license</li>
            <li>moderator should be present</li>
          </ul>
          <div
            className={`${indent_1} text-xl lg:text-lg lg:font-semibold mt-3`}
          >
            Process of Approval
          </div>

          <div className="w-full mx-auto p-4 md:p-10">
            {/* ================== ROW 1 (4 Columns) ================== */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 relative mb-3 lg:mb-22">
              {stepsRow1_2.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative group"
                >
                  {/* Box */}
                  <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-sm xl:text-[15px] font-medium z-10">
                    {step}
                  </div>

                  {/* Desktop Right Arrow (Show for all except the last item in this row) */}
                  {index !== stepsRow1_2.length - 1 && (
                    <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                      <ArrowRight size={24} />
                    </div>
                  )}

                  {/* Mobile Down Arrow (Show for ALL items in Row 1, to connect vertically) */}
                  <div className="lg:hidden mt-3 text-[#3b5998]">
                    <ArrowDown size={24} />
                  </div>
                </div>
              ))}

              {/* --- CUSTOM CONNECTOR (Desktop Only) --- */}
              <div className="hidden lg:block absolute left-0 -bottom-20 w-full h-20 pointer-events-none z-0">
                <svg className="w-full h-full overflow-visible">
                  <defs>
                    <marker
                      id="arrowhead-down"
                      markerWidth="10"
                      markerHeight="7"
                      refX="5"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#3b5998" />
                    </marker>
                  </defs>

                  {/* LOGIC:
                        Row 1 is 4 cols. Center of last col = 87.5%
                        Row 2 is 5 cols. Center of first col = 10% (100% / 5 / 2)
                      */}

                  {/* 1. Vertical Line Down from Row 1, Item 4 */}
                  <line
                    x1="87.5%"
                    y1="0"
                    x2="87.5%"
                    y2="50%"
                    stroke="#3b5998"
                    strokeWidth="2"
                  />

                  {/* 2. Horizontal Line Across (Right to Left: 87.5% -> 10%) */}
                  <line
                    x1="87.5%"
                    y1="50%"
                    x2="10%"
                    y2="50%"
                    stroke="#3b5998"
                    strokeWidth="2"
                  />

                  {/* 3. Vertical Line Down to Row 2, Item 1 */}
                  <line
                    x1="10%"
                    y1="50%"
                    x2="10%"
                    y2="100%"
                    stroke="#3b5998"
                    strokeWidth="2"
                    markerEnd="url(#arrowhead-down)"
                  />
                </svg>
              </div>
            </div>

            {/* ================== ROW 2 (5 Columns) ================== */}
            {/* Changed to lg:grid-cols-5 to accommodate 5 items */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-8">
              {stepsRow2_2.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative group"
                >
                  {/* Box */}
                  <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-sm xl:text-[15px] font-medium z-10">
                    {step}
                  </div>

                  {/* Desktop Right Arrow (Show for all except the absolute last item) */}
                  {index !== stepsRow2_2.length - 1 && (
                    <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                      <ArrowRight size={24} />
                    </div>
                  )}

                  {/* Mobile Down Arrow (Show for all except the absolute last item) */}
                  {index !== stepsRow2_2.length - 1 && (
                    <div className="lg:hidden mt-4 text-[#3b5998]">
                      <ArrowDown size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            Student Activities
          </div>
          <div className="mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-3xl">
            Student Activities
          </div>
          <ul className={`${indent_3} list-disc mt-5`}>
            <li>honor and acknowledge</li>
            <li>record motivations</li>
            <li>detailed historical record</li>
            <li>leave footprints</li>
          </ul>
          <div
            className={`${indent_1} text-xl lg:text-lg lg:font-semibold mt-3`}
          >
            KUKANG Report
          </div>
          <div className={`ml-5.5 lg:ml-11 mt-1`}>
            The KUKANG Event Report, which stands for Kinsa, Unsa, Kanus-a,
            Ngano, Gi-unsa, is a component of the post-event protocol for all
            organizations within the Ateneo de Davao University. This report is
            the final step in the implementation of activities and is designed
            to encapsulate the essence and impact of each event.
          </div>
          <div
            className={`${indent_1} text-xl lg:text-lg lg:font-semibold mt-6`}
          >
            Submission of KUKANG Report
          </div>
          <div className="w-full mx-auto p-4 md:p-10 text-[#3b5998]">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
              {submissionSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative group"
                >
                  {/* Box */}
                  <div className={boxClasses}>{step}</div>

                  {/* Desktop Right Arrow (Show for all except the last item) */}
                  {index !== submissionSteps.length - 1 && (
                    <div
                      className={`hidden lg:flex absolute -right-6 lg:-right-7 top-1/2 -translate-y-1/2 ${arrowColor}`}
                    >
                      <ArrowRight size={24} />
                    </div>
                  )}

                  {/* Mobile Down Arrow (Show for all except the last item) */}
                  {index !== submissionSteps.length - 1 && (
                    <div className={`lg:hidden mt-3 ${arrowColor}`}>
                      <ArrowDown size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${indent_1} text-xl lg:text-lg lg:font-semibold mt-6`}
          >
            Reminders
          </div>
          <div className="w-full mx-auto p-4 md:p-10 text-[#3b5998]">
            {/* Grid-cols-3 for desktop since there are only 3 items */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              {reminderSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center relative group"
                >
                  {/* Box */}
                  <div className={boxClasses}>{step}</div>

                  {/* Desktop Right Arrow (Show for all except the last item) */}
                  {index !== reminderSteps.length - 1 && (
                    <div
                      className={`hidden lg:flex absolute -right-6 lg:-right-7 top-1/2 -translate-y-1/2 ${arrowColor}`}
                    >
                      <ArrowRight size={24} />
                    </div>
                  )}

                  {/* Mobile Down Arrow (Show for all except the last item) */}
                  {index !== reminderSteps.length - 1 && (
                    <div className={`lg:hidden mt-3 ${arrowColor}`}>
                      <ArrowDown size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 lg:mt-9 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            {APOSTROPHE}DUNGOG{APOSTROPHE} SESSIONS
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            {APOSTROPHE}DUNGOG{APOSTROPHE} SESSIONS
          </div>
          <div className={`${indent_1} mt-3`}>
            Once or twice a month, the Office of Student Affairs, in partnership
            with the formation offices, will conduct monthly formation sessions.
          </div>
          <div
            className={`${indent_1} text-xl lg:text-lg lg:font-semibold mt-3`}
          >
            Offices included{COLON}
          </div>
          <ul className={`${indent_3} list-disc mt-2`}>
            <li>Arrupe Social Formation Office</li>
            <li>College Wellness and Testing Center</li>
            <li>Campus Ministry Office</li>
            <li>Ecoteneo Office</li>
            <li>Al Galam Institute for Islamic Identities</li>
            <li>Ignatian Spirituality Formation Office</li>
            <li>University Community Engagement and Advocacy Council Office</li>
          </ul>
          <div className="mt-7 lg:mt-9 font-formular-medium lg:hidden text-2xl lg:text-3xl">
            Things to Remember{COLON}
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix text-2xl lg:text-2xl">
            Things to Remember{COLON}
          </div>
          <ul className={`${indent_2} list-disc mt-2`}>
            <li>2 weeks before the final exams rule</li>
            <li>
              There will be times when concept papers will be catered LATE
            </li>
            <li>Always use your club emails</li>
            <li>Frequently ask questions and BOND with your moderator</li>
            <li>Never decide on your own</li>
            <li>Always be polite when dealing with various offices</li>
            <li>Create meaningful relationships with various offices</li>
            <li>
              First year recruitments are still a no-go during the first sem
            </li>
          </ul>

          <div className="mt-7 lg:mt-9 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl">
            QR CODES FOR VARIOUS DOCUMENTS AND REFERENCES{COLON}
          </div>
          <div className="mt-7 lg:mt-9 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl">
            QR CODES FOR VARIOUS DOCUMENTS AND REFERENCES{COLON}
          </div>
          <div className="flex flex-col lg:flex-row justify-center w-full gap-10 lg:gap-28 mt-10">
            <div className="flex flex-col justify-center items-center">
              <div className="w-40 h-40 lg:w-60 lg:h-60 relative flex justify-center items-center">
                <Image
                  src="/images/on-track/Concept-Paper.png"
                  alt="Concept Paper"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div
                className={`text-xl lg:text-lg lg:font-extrabold text-center uppercase lg:font-formular my-3`}
              >
                Concept Paper Form
              </div>
              <Link
                href="https://forms.gle/6Wcf8GL8rbGfq7cn9"
                target="_blank"
                rel="noopener noreferrer"
                className="underline lg:hidden -mt-3"
              >
                or access the document here
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-40 h-40 lg:w-60 lg:h-60 relative flex justify-center items-center">
                <Image
                  src="/images/on-track/Kukang-Form.png"
                  alt="Kukang Form"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div
                className={`text-xl lg:text-lg lg:font-extrabold text-center uppercase lg:font-formular my-3`}
              >
                Kukang Form
              </div>
              <Link
                href="https://drive.google.com/file/d/1fmiJUR4pIgAGaQiimx5ucADJVcq0Gf8P/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="underline lg:hidden -mt-3"
              >
                or access the document here
              </Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="w-40 h-40 lg:w-60 lg:h-60 relative flex justify-center items-center">
                <Image
                  src="/images/on-track/Parents-Consent-Form.png"
                  alt="Parents Consent Form"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div
                className={`text-xl lg:text-lg lg:font-extrabold text-center uppercase lg:font-formular my-3`}
              >
                Parents Consent Form
              </div>
              <Link
                href="https://docs.google.com/document/d/1X_q_SyZl2NAcCsuohchCc8yfzLu-yaG8/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="underline lg:hidden -mt-3"
              >
                or access the document here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
