"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import HeroBanner from "../ui/hero-banner";
import { Button } from "../ui/button";
import TapIn from "../sections/samahan-tap-in";
import IcommpEquipment from "../sections/icommp-equipment";
import DocumentRequestTabSection from "../sections/request-document-tab-section";
import OnTrack from "../sections/samahan-on-track";

// Define tabs data structure
const tabOptions = [
  { id: "tap-in", label: "SAMAHAN TAP-IN" },
  { id: "booking", label: "icommp equipment and studios booking" },
  { id: "documents", label: "request for official documents" },
  { id: "on-track", label: "samahan on track" },
];

function GuidesitePage() {
  const [activeTab, setActiveTab] = useState("tap-in");

  // Dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to get current label for the dropdown trigger
  const currentTabLabel = tabOptions.find((t) => t.id === activeTab)?.label;

  return (
    <div className="flex flex-col min-h-screen relative">
      <HeroBanner
        imageSrc="/images/hero-images/GUIDESITE-Hero.png"
        imageAlt="Guidesite Page Hero"
        header2="GUIDESITE"
      />

      <div className="md:px-14 2xl:px-36 mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 mb-20">
        {/* --- NAVIGATION WRAPPER --- */}
        <div className="w-full relative z-30 px-4 md:px-0 flex justify-center">
          {/* 1. MOBILE/TABLET DROPDOWN (Visible < xl, Hidden on xl) */}
          {/* Styled to match the "Frame 319" reference image */}
          <div className="xl:hidden w-full block" ref={dropdownRef}>
            <div className="relative md:font-bold text-[#002075] w-full">
              {/* Trigger Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`relative flex items-center justify-center w-full px-6 py-2 md:py-3 border-2 border-[#002075] uppercase tracking-wide text-sm md:text-base transition-all
                  ${dropdownOpen ? "rounded-t-2xl border-b-0" : "rounded-2xl"}`}
              >
                <span className="text-center mx-6">{currentTabLabel}</span>
                <ChevronDown
                  size={24}
                  strokeWidth={2.5}
                  className={`absolute right-6 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-200 border-x-2 border-b-2 border-[#002075] rounded-b-2xl overflow-hidden z-30 flex flex-col shadow-lg">
                  {tabOptions.map((tab) => {
                    const isSelected = activeTab === tab.id;

                    // We don't render the currently selected item in the list if you want to mimic a "Select" behavior where the top bar is the selected one.
                    // However, standard menus usually show all. Based on the image showing multiple items, I will render all.

                    return (
                      <div
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setDropdownOpen(false);
                        }}
                        className={`
                          w-full py-3 cursor-pointer text-center uppercase tracking-wide text-sm md:text-base border-t-2 border-[#002075] first:border-t-2
                          transition-colors duration-200
                          ${
                            isSelected
                              ? "bg-[#002075] text-white" // Active State (Dark Blue)
                              : "bg-white text-[#002075] hover:bg-gray-200 hover:text-[#002075]" // Default & Hover State
                          }
                        `}
                      >
                        {tab.label}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* 2. DESKTOP BUTTONS (Hidden < xl, Visible on xl) */}
          <div className="hidden xl:flex w-full gap-3">
            {tabOptions.map((tab) => (
              <Button
                key={tab.id}
                variant="tab"
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="xl:h-12 2xl:h-14"
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="mt-6 lg:mt-10 xl:mt-14">
          {activeTab === "tap-in" && <TapIn />}
          {activeTab === "booking" && <IcommpEquipment />}
          {activeTab === "documents" && <DocumentRequestTabSection />}
          {activeTab === "on-track" && <OnTrack />}
        </div>
      </div>
    </div>
  );
}

export default GuidesitePage;
