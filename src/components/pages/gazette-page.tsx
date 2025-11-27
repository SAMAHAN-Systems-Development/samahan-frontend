'use client'

import React from 'react'
import ConstitutionFile from '../ConstitutionFile'
import Dropdown from '../ui/Dropdown'
import Searchbar from '../ui/Searchbar'
import DocumentEntry from '../ui/document-entry'
import { gazetteDocuments } from '../../data/gazette-documents'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import HeroBanner from '../ui/hero-banner'

const ITEMS_PER_PAGE = 5;

function GazettePage() {
  // Use states for search bar and dropdowns
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
      <div className='flex flex-col justify-center items-center font-formular-regular text-mainblue p-4 xs:px-10 sm:px-14 pb-20 md:p-20'>
        <div className='text-center mb-10'>
          <h2 className='font-formular-black text-2xl md:text-5xl font-bold'>GOVERNING DOCUMENTS</h2>
          <p className='mt-4 text-sm md:text-lg'>View and download the latest Constitution of the Undergraduate students of the Ateneo de Davao University.</p>
        </div>
        <ConstitutionFile />
        
        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col w-full space-y-4 my-12 ">
          <div onKeyDown={handleKeyDown}>
            <Searchbar 
              value={inputValue} 
              onChange={setInputValue} 
              className="w-full" 
            />
          </div>
          <div className="flex flex-row w-full min-w-0 px-0 space-x-2 items-end">
            <Dropdown
              options={['Memorandum', 'Resolutions', 'Acts']}
              value={type}
              onChange={setType}
              label='TYPE'
              className='basis-3/4'
            />
            <Dropdown
              options={['2025', '2024', '2023', '2022', '2021']}
              value={year}
              label='YEAR'
              onChange={setYear}
              className='basis-1/4'
            />
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className='hidden lg:flex flex-row space-x-16 my-24'>
          <div className='flex flex-row space-x-8'>
            <Dropdown
              options={['Memorandum', 'Resolutions', 'Acts']}
              value={type}
              onChange={setType}
              label='TYPE'
              className='w-65 min-w-[200px] flex-shrink-0'
            />
            <Dropdown
              options={['2025', '2024', '2023', '2022', '2021']}
              value={year}
              label='YEAR'
              onChange={setYear}
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
              className="cursor-pointer font-formular-mono border border-mainblue rounded-xl px-14 py-2 flex-shrink-0 hover:bg-mainblue hover:text-white transition-colors duration-200"
            >
              search
            </button>
          </div>        
        </div>

        {/* 4. Render filtered documents here */}
        <div className="document-entry w-full max-w-[1200px] mt-4 mx-auto divide-y-2 divide-mainblue">
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