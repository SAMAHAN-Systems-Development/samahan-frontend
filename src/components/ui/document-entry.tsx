//Offices
import { GoLaw } from "react-icons/go";
import { CourtLawIcon } from "hugeicons-react";
import { FaRegCalendar } from "react-icons/fa";
import Link from "next/link";
import React from "react";

interface DocumentEntryProps {
    documentName: string;
    description?: string;
    office?: string;
    actNumber?: number;
    year?: number;
    date?: Date;
    href: string;
    type: 'Act' | 'Memorandum' | 'Resolution';
}
 
// Fallback font function for special characters
function withFontFallback(text?: string) {
    if (!text) return null;
    // Regex for special characters
    const specialChars = /[~!@#$%^&*()_+{}|:"?><\[\]\\;',./’]/g;
    const parts = text.split(specialChars);
    const matches = text.match(specialChars);

    if (!matches) return text;

    const result: React.ReactNode[] = [];
    for (let i = 0; i < parts.length; i++) {
        if (parts[i]) result.push(parts[i]);
        if (matches[i]) {
            result.push(
                <span key={i} style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
                    {matches[i]}
                </span>
            );
        }
    }
    return result;
}

export default function DocumentEntry({ documentName, description, office, actNumber, date, year, href, type }: DocumentEntryProps){
    // Determine label based on type
    let numberLabel = '';
    if (type === 'Act' && actNumber && year) {
        numberLabel = `SAMAHAN Act No. ${actNumber} of ${year}`;
    } else if (type === 'Resolution' && actNumber && year) {
        numberLabel = `Resolution No. ${String(actNumber).padStart(3, '0')}-${String(year).slice(-2)}${String(year + 1).slice(-2)}`;
    }

    return (
        <Link href={href} className="group container flex flex-col py-12 px-4 hover:bg-mainblue transition-colors duration-200  border-b-2 border-mainblue hover:border-mainblue">
            {/* Document Name */}
            <div className="document-name font-formular-black text-lg text-mainblue font-black group-hover:text-white">
                {withFontFallback(documentName)}
            </div>
            {/* Description */}
            <div className="description py-5 font-formular-regular text-sm md:text-lg text-mainblue group-hover:text-white">
                {withFontFallback(description)}
            </div>
            {/* Office, Act Number, Date */}
            <div className="flex flex-col md:flex-row py-3 space-y-4 md:space-y-0 md:space-x-8 items-start">
                {/* Office */}
                {office && (
                    <div className="office flex items-center space-x-2">
                        <GoLaw className="text-mainblue group-hover:text-white" size={16}/>
                        <span className="font-formular-mono text-xs text-mainblue group-hover:text-white">
                            {withFontFallback(office)}
                        </span>
                    </div>
                )}
               {/* Act/Resolution Number */}
                {numberLabel && (
                    <div className="act-no flex items-center space-x-2">
                        <CourtLawIcon className="text-mainblue group-hover:text-white" size={16} strokeWidth={1.5} />
                        <span className="font-formular-mono text-mainblue text-xs group-hover:text-white">
                            {withFontFallback(numberLabel)}
                        </span>
                    </div>
                )}
                {/* Date */}
                {date && (
                    <div className="date flex items-center space-x-2">
                        <FaRegCalendar className="text-mainblue group-hover:text-white" size={16} />
                        <span className="font-formular-mono text-xs text-mainblue group-hover:text-white">
                            {date.toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                            })}
                        </span>
                    </div>
                )}
            </div>
        </Link>
    )
}