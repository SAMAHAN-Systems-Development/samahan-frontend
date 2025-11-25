'use client'

import React from 'react'
import ConstitutionFile from '../ConstitutionFile'
import Dropdown from '../ui/Dropdown'
import Searchbar from '../ui/Searchbar'

function GazettePage() {
  //Use states for search bar and dropdowns
  const [type, setType] = React.useState('Resolutions');
  const [year, setYear] = React.useState('2024');
  const [search, setSearch] = React.useState('');

  return (
    <div className='flex flex-col justify-center items-center font-formular-regular text-mainblue p-4 lg:p-20'>
        <div className='text-center mb-10'>
          <h2 className='font-formular-black text-2xl md:text-5xl font-bold'>GOVERNING DOCUMENTS</h2>
          <p className='mt-4 text-sm md:text-lg'>View and download the latest Constitution of the Undergraduate students of the Ateneo de Davao University.</p>
        </div>
        <ConstitutionFile />
        {/* MOBILE VIEW */}
        <div className="lg:hidden flex flex-col w-full space-y-4 my-12 ">
          <Searchbar value={search} onChange={setSearch} className="w-full" />
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
            onChange={setYear}/>
          </div>
          <div className="flex flex-row space-x-4 items-center flex-1">
            <Searchbar value={search} onChange={setSearch} className="flex-1" />
            <button className="font-formular-mono border border-mainblue rounded-xl px-14 py-2 flex-shrink-0">
              search
            </button>
          </div>        
          </div>
        <div className='h-10'>

        </div>
    </div>
  )
}

export default GazettePage
