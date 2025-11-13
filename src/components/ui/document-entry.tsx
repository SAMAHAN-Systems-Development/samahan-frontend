//Offices
//Offices
import { GoLaw } from "react-icons/go";
import { CourtLawIcon } from "hugeicons-react";
import { FaRegCalendar } from "react-icons/fa";
import Link from "next/link";

interface DocumentEntryProps {
    documentName: string;
    description?: string;
    office?: string;
    actNumber?: number;
    year?: number;
    date?: Date;
    href: string;
}

export default function DocumentEntry({ documentName, description, office, actNumber, date, href }: DocumentEntryProps){
    return (
        <Link href={href} className="group container flex flex-col py-10 px-4 hover:bg-mainblue transition-colors duration-200  border-b-2 border-mainblue hover:border-mainblue">
            {/* Document Name */}
            <div className="document-name font-formular text-lg text-mainblue font-black group-hover:text-white">
                {documentName}
            </div>
            {/* Description */}
            <div className="description py-3 font-formular-regular text-lg text-mainblue group-hover:text-white">
                {description}
            </div>
            {/* Office, Act Number, Date */}
            <div className="flex flex-col md:flex-row py-3 space-y-4 md:space-y-0 md:space-x-8 items-start">
                {/* Office */}
                {office && (
                    <div className="office flex items-center space-x-2">
                        <GoLaw className="text-mainblue group-hover:text-white" size={16}/>
                        <span className="font-formular-mono text-xs text-mainblue group-hover:text-white">{office}</span>
                    </div>
                )}
                {/* Act Number */}
                {actNumber && (
                    <div className="act-no flex items-center space-x-2">
                        <CourtLawIcon className="text-mainblue group-hover:text-white" size={16} strokeWidth={1.5} />
                        <span className="font-formular-mono text-mainblue text-xs group-hover:text-white">SAMAHAN Act No. {actNumber} of 2024</span>
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