'use client'
import React, { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react';
import HeroBanner from '../ui/hero-banner'
import { Button } from '../ui/button';
import StudentPerks from '../sections/student-perks';
import DigitalApplications from '../sections/digital-applications';
import AcademicArms from '../sections/academic-arms';
import ResourceGuide from '../sections/resource-guide';
import Image from "next/image";

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
  const [activeTab, setActiveTab] = useState("guide");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentTabLabel = tabOptions.find(t => t.id === activeTab)?.label;
  
  const tabsWithBackground = ['guide', 'directory', 'libraries', 'research'];
  const shouldShowBackground = tabsWithBackground.includes(activeTab);

  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/ACADEMIX-Hero.png"
        imageAlt="Academix Page Hero"
        header1='ACADHUB'
        header2="ACADEMIX"
      />

      {shouldShowBackground && (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden hidden md:block">
          <div className="absolute left-1/2 top-[1150px] xl:top-[1150px] 2xl:top-[1420px] z-0 h-[900px] w-[200vw] -translate-x-1/2 -translate-y-1/2 md:h-[700px] md:w-[1400px] lg:h-[800px] lg:w-[1750px] 2xl:h-[900px] 2xl:w-[130vw] scale-125 sm:scale-100 -rotate-45 xs:rotate-0">
            <Image
              src="/images/tape-design/tape-1.png"
              alt="Decorative tape design"
              fill
              className="object-fill"
            />
          </div>
        </div>
      )}

      <div className='md:px-14 2xl:px-36 mt-6 lg:mt-10 xl:mt-14 2xl:mt-20 mb-20 relative z-10'>
        
        <div className="w-full relative z-30 px-4 md:px-0 flex justify-center">
            
          <div className="lg:hidden w-full block" ref={dropdownRef}>
            <div className="relative md:font-bold text-[#002075] w-full">
              
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

          <div className="hidden lg:flex w-full gap-3 justify-center flex-wrap">
            {tabOptions.map((tab) => (
              <Button 
                key={tab.id}
                variant="tab" 
                active={activeTab === tab.id} 
                onClick={() => setActiveTab(tab.id)}
                className="min-w-[120px]"
              >
                {tab.label}
              </Button>
            ))}
          </div>

        </div>

        <div className="mt-6 lg:mt-10 xl:mt-14">
            {activeTab === "guide" && <ResourceGuide />}
            {activeTab === "perks" && <StudentPerks />}
            {/* {activeTab === "directory" && <div>Directory Content</div>} */}
            {/* {activeTab === "libraries" && <div>Libraries Content</div>} */}
            {/* {activeTab === "research" && <div>Research Content</div>} */}
            {activeTab === "apps" && <DigitalApplications />}
            {activeTab === "clusters" && <AcademicArms />}
        </div>
        
      </div>
    </div>
  )
}

export default AcademixPage