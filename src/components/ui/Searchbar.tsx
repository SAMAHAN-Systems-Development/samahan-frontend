import React from 'react';
import { FiSearch } from 'react-icons/fi';

interface SearchbarProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const Searchbar: React.FC<SearchbarProps> = ({ value, onChange, className }) => (
  <div className={`relative ${className || ''}`}>
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mainblue">
      <FiSearch className="w-5 h-5" />
    </span>
    <input
      type="text"
      className="font-formular-mono border border-mainblue rounded-xl pl-10 pr-4 py-2 w-full focus:border-mainblue focus:outline-none"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);

export default Searchbar;