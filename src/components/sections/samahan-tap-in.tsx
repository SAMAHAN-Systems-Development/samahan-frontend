import React from 'react';
import TabHeader from '../ui/tab-header';
import Link from 'next/link';

export default function TapIn() {
    const assets = [
    "Finster Auditorium",
    "F213 Multi-purpose Room",
    "Bapa Benny Tudtud Auditorium Conference Room A - Ricci Hall, 3rd Floor, CCFC Building",
    "Building",
    "Conference Room B - Ricci Hall, 3rd Floor, CCFC Building",
    "Conference Room C1 - Ricci Hall, 3rd Floor, CCFC Building",
    "Conference Room C2 - Ricci Hall, 3rd Floor, CCFC Building",
    "Conference Room D - Ricci Hall, 3rd Floor, CCFC Building",
    "Conference Room E - Ricci Hall, 3rd Floor, CCFC Building",
    "Pakighinabi, Ricci Hall - 3rd Floor, CCFC Building",
    "Training Room - Xavier Hall, 8th Floor, CCFC Building",
    "Media Room - Xavier Hall, 8th Floor, CCFC Building",
    "Arrupe Hall Front Area - Arrupe Hall Martin Building",
    "Bus #1 | AEK-744",
    "Bus #2 | AAG-6656",
    "Bus #3 | AAG-6653",
    "Bus #4 | LHF-260",
    "Coaster Bus | AAH-1719",
    "Dump Truck | LGV-279",
    "Toyota-Grandia | AAG-6059",
    "Toyota-Innova | KEE-237",
    "L300 Van | LHE-238",
    ];

    const toRoman = (num: number) => {
        const roman: { [key: string]: number } = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
        let str = '';

        for (const i of Object.keys(roman)) {
            const q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }

        return str.toLowerCase();
    };

    const renderWithFallbackFont = (text: string) => {
        const regex = /([@/()|:’'#])/g;
        return text.split(regex).map((part, index) => {
            if (part.match(regex)) {
                return <span key={index} style={{ fontFamily: 'Arial, sans-serif' }}>{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className="font-formular-regular text-mainblue w-full sm:w-[90%] sm:mx-auto">
            <TabHeader
                name="SAMAHAN TAP-IN"
            />
            <div className="list-container py-8 px-4 sm:px-16 w-full">
                <ol type="1" className="list-decimal pl-5 space-y-6">
                    <li><strong>Craft the concept paper for your event/activity. </strong>
                        Secure required parts of the paper {renderWithFallbackFont('(refer to the concept paper form), and its needed signatures. Afterward, submit it to the Office of the Student Affairs through this link: ')}
                        <Link href="/" target="_blank" rel="noopener noreferrer" className="hover:underline text-mainblue break-all">Concept Paper Form</Link>
                        . Submit your response through this link as well.
                    </li>
                    <li><strong>Once approved, you may proceed with booking your desired venue. </strong>
                        {renderWithFallbackFont('Channels may vary depending on your chosen venue:')}
                        {/* Sublist 1 */}
                         <ol type="a" className="list-[lower-alpha] pl-5 mt-2 space-y-4">
                            <li>
                                <Link href="https://booking.addu.edu.ph" target="_blank" rel="noopener noreferrer" className="hover:underline text-mainblue">
                                {renderWithFallbackFont('booking.addu.edu.ph')}
                                </Link>
                                {renderWithFallbackFont(' for the following assets:')}
                                <div className="table-container p-4">
                                    <div className="border border-mainblue">
                                       {/* Mobile View */}
                                       <div className="md:hidden grid" style={{ gridTemplateColumns: '3.5rem 1fr' }}>
                                          {assets.map((asset, index) => (
                                            <div key={index} className="contents">
                                              {/* Index cell (left column) */}
                                              <div className="border-t border-b border-r border-mainblue font-bold text-center p-2 bg-white">
                                                {toRoman(index + 1)}.
                                              </div>
                                              {/* Description cell (right column) */}
                                              <div className="border-t border-b border-r border-mainblue p-2 break-words bg-white">
                                                {renderWithFallbackFont(asset)}
                                              </div>
                                            </div>
                                          ))}
                                        </div>

                                        {/* Desktop View */}
                                        <div className="hidden md:grid md:grid-cols-2">
                                            {Array.from({ length: 11 }).map((_, index) => (
                                                <React.Fragment key={index}>
                                                    <div className={`flex ${index < 10 ? 'border-b border-mainblue' : ''}`}>
                                                        <span className="w-16 p-3 font-bold border-r border-mainblue text-center">{toRoman(index + 1)}.</span>
                                                        <span className="flex-1 p-3">{renderWithFallbackFont(assets[index])}</span>
                                                    </div>
                                                    <div className={`flex ${index < 10 ? 'border-b border-mainblue' : ''} md:border-l border-mainblue`}>
                                                        <span className="w-16 p-3 font-bold border-r border-mainblue text-center">{toRoman(index + 12)}.</span>
                                                        <span className="flex-1 p-3">{renderWithFallbackFont(assets[index + 11])}</span>
                                                    </div>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li> 
                                <Link
                                    href="https://library.addu.edu.ph/booking/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline text-mainblue break-all"
                                    >
                                    {renderWithFallbackFont('https://library.addu.edu.ph/booking/')}
                                </Link>
                                {renderWithFallbackFont(' for the following library facilities:')}
                                <ol type="i" className="list-[lower-roman] pl-5 mt-2 space-y-1">
                                    <li>Multi-purpose Room</li>
                                    <li>Collaboratorium</li>
                                    <li>Audio-visual Room
                                        <ol type="1" className="list-decimal pl-5 mt-2">
                                            <li>Corresponding steps and guidelines are elucidated on the website.</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>{renderWithFallbackFont('Physical Plant Office for:')}
                                <ol type="i" className="list-[lower-roman] pl-5 mt-2 space-y-1">
                                    <li>Classrooms
                                        <ol type="1" className="list-decimal pl-5 mt-2">
                                            <li>{renderWithFallbackFont("Go to the registrar's office and inquire what are the available rooms at the time of your activity. After the confirmation, you will be directed to go to the Physical Plant Office to request a form that you need to complete.")}</li>
                                        </ol>
                                    </li>
                                </ol>
                            </li>
                            <li>{renderWithFallbackFont("Ma'am Suzanne Doromal, for:")}
                                <ol type="i" className="list-[lower-roman] pl-5 mt-2 space-y-1">
                                    <li>{renderWithFallbackFont('Martin Hall (4th, 6th, 7th Floor)')}
                                        <ol type="1" className="list-decimal pl-5 mt-2 space-y-2">
                                            <li>First, proceed to the Athletics Office located at the back of the 4th Floor, Martin Hall, and inquire about the availability of the venue.</li>
                                            <li>{renderWithFallbackFont('Then, send a letter addressed to Ma’am Suzanne Doromal about reserving any of the Martin Hall floors. The letter can be sent online through her AdDU email address: smadoromal@addu.edu.ph or submit a physical letter on the 9th floor of the CCFC building.')}</li>
                                            <li>{renderWithFallbackFont("After the approval of Ma’am Su, proceed to the University Athletics Office to obtain a copy of the Martin Hall reservation form. Attached to the reservation form is the letter approved by Ma’am Su. Before submitting the reservation form back to the University Athletics Office, the necessary information must be inputted, along with the needed signatories.")}</li>
                                        </ol> 
                                    </li>
                                </ol>
                            </li>
                            <li> {renderWithFallbackFont('HISFLEX ROOM RESERVATION FORM for:')}</li>
                            <ol type="i" className="list-[lower-roman] pl-5 mt-2 space-y-1">{renderWithFallbackFont('HisFlex Rooms:')}
                                <ol type="1" className="list-decimal pl-5 mt-2">
                                    <li>Before submitting your reservation request, please obtain the necessary approval from your immediate supervisor and attach a PDF or image of the approval document to the form. No additional paper submissions will be required.</li>
                                </ol>
                            </ol>
                        </ol>
                    </li>

                </ol>
            </div>
        </div>
    );
}
