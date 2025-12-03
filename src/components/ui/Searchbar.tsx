import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, className }) => (
  <div className={`relative ${className || ''}`}>
    <span className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-mainblue md:-mt-[1px]">
      <FiSearch className="md:w-5 md:h-5" />
    </span>
    <input
      type="text"
      className="font-formular-regular border border-mainblue rounded-sm pt-1 md:pb-1.5 md:pt-2 pl-7 md:pl-10 pr-4 py-0.5 text-sm md:text-base w-full focus:border-mainblue focus:outline-none"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default Searchbar;