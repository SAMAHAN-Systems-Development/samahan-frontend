'use client'

import React, { useState, useRef, useEffect } from 'react'
import ConstitutionFile from '../ConstitutionFile'
import Searchbar from '../ui/Searchbar'
import DocumentEntry from '../ui/document-entry'
import { gazetteDocuments } from '../../data/gazette-documents'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { ChevronDown } from "lucide-react" 
import HeroBanner from '../ui/hero-banner'

const ITEMS_PER_PAGE = 5;
interface CustomDropdownProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  className?: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, value, onChange, label, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`flex items-center gap-2 relative z-30 ${className}`} ref={dropdownRef}>
      {label && (
        <label className="text-mainblue font-extrabold text-sm uppercase tracking-widest hidden md:block whitespace-nowrap">
          {label}<span className="font-['Arial']">:</span>
        </label>
      )}
      <div className="relative w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-between text-sm md:text-base w-full px-2 md:px-4 py-0.5 md:py-2 bg-white border border-mainblue text-mainblue font-bold shadow-sm hover:bg-blue-50 transition-all ${
            isOpen ? "rounded-t-xl border-b-0" : "rounded-xl"
          }`}
        >
          <span className="truncate">{value}</span>
          <ChevronDown
            size={18}
            className={`ml-2 transition-transform duration-200 flex-shrink-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="absolute top-full right-0 left-0 -mt-[1px] bg-white border border-mainblue rounded-b-lg shadow-xl overflow-hidden py-1 z-50">
            <div className="max-h-60 overflow-y-auto">
              {options.map((option) => {
                const isSelected = value === option;
                return (
                  <div
                    key={option}
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className="group flex items-center justify-between px-2 md:px-4 py-0.5 md:py-2 hover:bg-gray-300 cursor-pointer transition-colors text-mainblue font-medium"
                  >
                    <span className="truncate mr-2 text-sm md:text-base">{option}</span>
                    <div
                      className={`w-4 h-4 border border-mainblue rounded-[1px] flex-shrink-0 flex items-center justify-center 
                        ${
                          isSelected
                            ? "bg-mainblue"
                            : "bg-transparent group-hover:bg-mainblue/50"
                        }`}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

function GazettePage() {
  const [type, setType] = React.useState('Resolutions');
  const [year, setYear] = React.useState('2024');
  
  const [inputValue, setInputValue] = React.useState(''); 
  const [activeSearch, setActiveSearch] = React.useState('');

  const [page, setPage] = React.useState(1);

  const typeMap: Record<string, string> = {
    'Acts': 'Act',
    'Resolutions': 'Resolution',
    'Memorandum': 'Memorandum'
  };

  const handleSearch = () => {
    setActiveSearch(inputValue);
    setPage(1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const isMobile = window.innerWidth < 1024;
      
      if (isMobile) {
        const timeoutId = setTimeout(() => {
          setActiveSearch(inputValue);
          setPage(1);
        }, 300);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [inputValue]);
  // ---------------------------------------------

  const filteredDocuments = React.useMemo(() => {
    return gazetteDocuments.filter(doc => {
      const matchesType = doc.type === typeMap[type];
      const matchesYear = doc.year.toString() === year;
      
      const matchesSearch = activeSearch
        ? (
            doc.documentName.toLowerCase().includes(activeSearch.toLowerCase()) ||
            doc.description?.toLowerCase().includes(activeSearch.toLowerCase()) ||
            doc.office.toLowerCase().includes(activeSearch.toLowerCase())
          )
        : true;
      return matchesType && matchesYear && matchesSearch;
    });
  }, [type, year, activeSearch]);

  const totalPages = Math.ceil(filteredDocuments.length / ITEMS_PER_PAGE);
  const paginatedDocuments = filteredDocuments.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  React.useEffect(() => {
    setPage(1);
  }, [type, year]);

  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/GAZETTE-Hero.png"
        imageAlt="Gazette Page Hero"
        header2="GAZETTE"
      />
      <div className='flex flex-col justify-center items-center font-formular-regular text-mainblue pt-8 md:pt-10 lg:pt-14 px-4 xs:px-10 sm:px-14 pb-20 md:px-20'>
        <div className='text-center'>
          <h2 className='font-formular-black text-2xl md:text-4xl lg:text-5xl font-bold'>GOVERNING DOCUMENTS</h2>
          <p className='mt-4 text-sm md:text-lg'>View and download the latest Constitution of the Undergraduate students of the Ateneo de Davao University.</p>
        </div>
        <div className='mt-7 md:mt-10'></div>
        <ConstitutionFile />
        
        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col w-full space-y-3 md:space-y-5 mt-10 md:mt-13">
          <div onKeyDown={handleKeyDown}>
            <Searchbar 
              value={inputValue} 
              onChange={setInputValue} 
              className="w-full" 
            />
          </div>
          <div className="flex flex-row w-full min-w-0 px-0 space-x-2 md:space-x-4 items-end">
            <CustomDropdown
              options={['Memorandum', 'Resolutions', 'Acts']}
              value={type}
              onChange={setType}
              label='TYPE'
              className='basis-3/5'
            />
            <CustomDropdown
              options={['2025', '2024', '2023', '2022', '2021']}
              value={year}
              label='YEAR'
              onChange={setYear}
              className='basis-2/5'
            />
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className='hidden lg:flex flex-row space-x-12 mt-12'>
          <div className='flex flex-row space-x-3'>
            <CustomDropdown
              options={['Memorandum', 'Resolutions', 'Acts']}
              value={type}
              onChange={setType}
              label='TYPE'
              className='w-65 min-w-[200px] flex-shrink-0'
            />
            <CustomDropdown
              options={['2025', '2024', '2023', '2022', '2021']}
              value={year}
              label='YEAR'
              onChange={setYear}
              className='w-40 flex-shrink-0'
            />
          </div>
          <div className="flex flex-row space-x-4 items-center flex-1" onKeyDown={handleKeyDown}>
            <Searchbar 
              value={inputValue} 
              onChange={setInputValue} 
              className="flex-1" 
            />
            <button 
              onClick={handleSearch}
              className="cursor-pointer font-formular-mono border border-mainblue rounded-xl px-8 py-2 flex-shrink-0 hover:bg-mainblue hover:text-white transition-colors duration-200"
            >
              search
            </button>
          </div>        
        </div>

        {/* 4. Render filtered documents here */}
        <div className="document-entry w-full max-w-[1200px] mt-4 md:mt-6 mx-auto divide-y-2 divide-mainblue">
          {paginatedDocuments.map(doc => (
            <DocumentEntry
              key={doc.documentName}
              documentName={doc.documentName}
              description={doc.description}
              office={doc.office}
              actNumber={doc.actNumber}
              year={doc.year}
              date={doc.date}
              href={doc.href}
              type={doc.type}
            />
          ))}
          {paginatedDocuments.length === 0 && (
            <div className="text-center py-10 opacity-70">
              No documents found matching your criteria.
            </div>
          )}
        </div>

        {/* Paginator */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mt-6">
            <button
              className="px-3 py-1 border border-mainblue rounded disabled:opacity-50 text-mainblue"
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <FiChevronLeft size={20} />
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-3 py-1 rounded border border-mainblue
                  ${page === i + 1
                    ? 'bg-mainblue text-white'
                    : 'bg-white text-mainblue hover:bg-mainblue hover:text-white transition-colors duration-150'
                  }`}
                onClick={() => setPage(i + 1)}
                aria-label={`Page ${i + 1}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-3 py-1 border border-mainblue rounded disabled:opacity-50 text-mainblue"
              onClick={() => setPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
    
  )
}

export default GazettePage