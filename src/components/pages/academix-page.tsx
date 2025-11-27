'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react';
import HeroBanner from '../ui/hero-banner'
import { Button } from '../ui/button';
import StudentPerks from '../sections/student-perks';
import DigitalApplications from '../sections/digital-applications';
import AcademicArms from '../sections/academic-arms';
import RecommendedWebsites from '../sections/recommended-websites';

// 1. Define tabs based on your attached image
const tabOptions = [
  { id: "guide", label: "GUIDE" },
  { id: "perks", label: "PERKS" },
  { id: "directory", label: "DIRECTORY" },
  { id: "libraries", label: "LIBRARIES" },
  { id: "research", label: "RESEARCH" },
  { id: "apps", label: "APPS" },
  { id: "clusters", label: "CLUSTERS" },
];

function AcademixPage() {
  // 2. State Management
  const [activeTab, setActiveTab] = useState("guide");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 3. Click Outside Logic
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Helper to get current label
  const currentTabLabel = tabOptions.find(t => t.id === activeTab)?.label;

  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/ACADEMIX-Hero.png"
        imageAlt="Academix Page Hero"
        header1='ACADHUB'
        header2="ACADEMIX"
      />

      <div className='md:px-14 2xl:px-36 mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 mb-20'>
        
        {/* --- NAVIGATION WRAPPER --- */}
        <div className="w-full relative z-30 px-4 md:px-0 flex justify-center">
            
          {/* A. MOBILE/TABLET DROPDOWN (Visible < xl) */}
          <div className="lg:hidden w-full block" ref={dropdownRef}>
            <div className="relative md:font-bold text-[#002075] w-full">
              
              {/* Trigger Button */}
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`relative flex items-center justify-center w-full px-6 py-2 md:py-3 border-2 border-[#002075] uppercase tracking-wide text-sm md:text-base transition-all bg-white
                  ${dropdownOpen ? 'rounded-t-2xl border-b-0' : 'rounded-2xl'}`}
              >
                <span className="text-center mx-6">{currentTabLabel}</span>
                <ChevronDown 
                  size={24} 
                  strokeWidth={2.5}
                  className={`absolute right-6 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} 
                />
              </button>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 w-full bg-gray-200 border-x-2 border-b-2 border-[#002075] rounded-b-2xl overflow-hidden z-30 flex flex-col shadow-lg">
                  {tabOptions.map((tab) => {
                    const isSelected = activeTab === tab.id;
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
                          ${isSelected 
                            ? 'bg-[#002075] text-white' 
                            : 'bg-white text-[#002075] hover:bg-gray-200' 
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

          {/* B. DESKTOP BUTTONS (Visible >= xl) */}
          <div className="hidden lg:flex w-full gap-3 justify-center flex-wrap">
            {tabOptions.map((tab) => (
              <Button 
                key={tab.id}
                variant="tab" // Ensure your Button component handles this variant similarly to the image (rounded-xl, border-blue)
                active={activeTab === tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className="min-w-[120px]" // Optional: ensures buttons have a nice minimum width
              >
                {tab.label}
              </Button>
            ))}
          </div>

        </div>

        {/* --- CONTENT AREA --- */}
        <div className="mt-6 lg:mt-10 xl:mt-14">
            {/* Replace these divs with your actual components when ready */}
            {/* {activeTab === "guide" && <div>Guide Content</div>} */}
            {activeTab === "perks" && <StudentPerks />}
            {/* {activeTab === "directory" && <div>Directory Content</div>} */}
            {/* {activeTab === "libraries" && <div>Libraries Content</div>} */}
            {activeTab === "research" && <RecommendedWebsites />}
            {activeTab === "apps" && <DigitalApplications />}
            {activeTab === "clusters" && <AcademicArms />}
        </div>
        
      </div>
    </div>
  )
}

export default AcademixPage