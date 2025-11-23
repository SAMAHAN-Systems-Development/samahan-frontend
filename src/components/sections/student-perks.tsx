import React from 'react';
import TabHeader from '@/components/ui/tab-header';
import Image from 'next/image';
import { MdArrowOutward } from "react-icons/md";

const urlRegex = /(https?:\/\/[^\s/$.?#].[^\s]*|www\.[^\s/$.?#].[^\s]*)/gi;

//Helper function to replace missing characters
function renderWithFallbackFont(text: string) {
  return text.split(/([^\w\d\s])/).map((segment, idx) => {
    // Only wrap if it's a non-alphanumeric, non-space character
    if (segment && /[^\w\d\s]/.test(segment)) {
      return (
        <span key={idx} style={{ fontFamily: 'Arial, sans-serif' }}>
          {segment}
        </span>
      );
    }
    return (
      <span key={idx} className="font-formular-regular">
        {segment}
      </span>
    );
  });
}

//Helper function to underline links on description
function linkifyText(text: string) {
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      const href = part.startsWith('http') ? part : `http://${part}`;
      
      return (
        <a 
          key={index} 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-mainblue hover:underline" 
        >
          {renderWithFallbackFont(part)}
        </a>
      );
    }
    return part;
  });
}

function processLine(line: string){
    const linkifiedParts = linkifyText(line);

    return linkifiedParts.map((part, index) => {
        if(typeof part === 'string') {
            return <React.Fragment key={index}>{renderWithFallbackFont(part)}</React.Fragment>;
        } return part;
    });
}

export default function StudentPerks() {
  return (
    <div className='font-formular-regular text-mainblue w-full sm:w-[90%] sm:mx-auto'>
      <TabHeader name='STUDENT PERKS'/>
      <div className="mx-2 sm:mx-auto px-0 py-8 sm:px-8 sm:py-24 flex flex-col items-center gap-12">
        {/* SPOTIFY - Left Card */}
        <div className="flex items-center w-full max-w-[550px] mx-auto mb-12">
          <Image 
            src="/images/student-perks/logo-spotify-perks-academix.png"
            alt="SPOTIFY"
            width={200}
            height={200}
            className="mr-2 w-25 h-25 sm:mr-4 sm:w-30 sm:h-30 object-contain"
          />
          <div className="flex-1 min-w-0 text-left">
            <a
              href="https://www.spotify.com/ph-en/student/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-trapix text-xl sm:text-3xl mb-2 flex items-center gap-2 text-mainblue hover:underline"
            >
              <span className="flex items-center">
                SPOTIFY
                <MdArrowOutward className="ml-1 block sm:hidden" />
              </span>
            </a>
            <p className="text-base text-[10px] sm:text-lg leading-snug">
                {`50% Off Student Discount\nEnjoy your favorite music ad-free at half the price! Sign up at https://www.spotify.com/ph/student/ using your AdDU email to get 50% off your Spotify Premium subscription.`
                .split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                {processLine(line)}
                <br />
                </React.Fragment>
                ))}
             </p>
          </div>
        </div>

        {/* APPLE MUSIC - Right Card */}
        <div className="flex items-center w-full max-w-[550px] mx-auto mb-12">
          <div className="flex-1 min-w-0 text-left">
            <a
              href="https://support.apple.com/en-ph/106008"
              target="_blank"
              rel="noopener noreferrer"
              className="font-trapix text-xl sm:text-3xl mb-2 flex items-center gap-2 text-mainblue hover:underline"
            >
              <span className="flex items-center">
                APPLE MUSIC
                <MdArrowOutward className="ml-1 block sm:hidden" />
              </span>
            </a>
            <p className="text-base text-[10px] sm:text-lg leading-snug">
              {`50% Off Student Discount\nStream millions of songs ad-free for half the price! Sign up with your AdDU email to enjoy 50% off your Apple Music subscription.`
                .split('\n').map((line, idx) => (
                  <React.Fragment key={idx}>
                    {renderWithFallbackFont(line)}
                    <br />
                  </React.Fragment>
                ))}
            </p>
          </div>
          <Image 
            src="/images/student-perks/logo-appplemusic-perks-academix.png"
            alt="APPLE MUSIC"
            width={200}
            height={200}
            className="ml-2 w-25 h-25 sm:ml-4 sm:w-30 sm:h-30 object-contain"
          />
        </div>

        {/* MICROSOFT OFFICE 365 - Left Card */}
        <div className="flex items-center w-full max-w-[550px] mx-auto mb-12">
          <Image 
            src="/images/student-perks/logo-microsoft365-perks-academix.png"
            alt="MICROSOFT OFFICE 365"
            width={200}
            height={200}
            className="mr-2 w-25 h-25 sm:mr-4 sm:w-30 sm:h-30 object-contain"
          />
          <div className="flex-1 min-w-0 text-left">
           <a
            href="http://www.office.com/getOffice365"
            target="_blank"
            rel="noopener noreferrer"
            className="font-trapix text-xl sm:text-3xl mb-2 text-mainblue group"
            >
            <span className="inline-flex flex-wrap items-center gap-2">
                <span className="group-hover:underline">MICROSOFT OFFICE</span>{' '}
                <span className="inline-flex items-center group-hover:underline">
                365 <MdArrowOutward className="ml-1 block sm:hidden" />
                </span>  
            </span>
            </a>
            <p className="text-base text-[10px] sm:text-lg leading-snug">
              {`1 TB Cloud Storage\nGet free access to Word, Excel, PowerPoint, Outlook, OneNote, and 1TB of cloud storage! Sign up at http://www.office.com/getOffice365 using your AdDU email to activate your subscription and download the apps.`
                .split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                {processLine(line)}
                <br />
                </React.Fragment>
                ))}
            </p>
          </div>
        </div>

        {/* GOOGLE WORKSPACE FOR EDUCATION - Right Card */}
        <div className="flex items-center w-full max-w-[550px] mx-auto mb-12">
          <div className="flex-1 min-w-0 text-left">
            <a
                href="https://www.workspace.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-trapix text-xl sm:text-3xl mb-2 text-mainblue group"
                >
                <span className="inline-block">
                    <span className="group-hover:underline">
                    GOOGLE WORKSPACE FOR{' '}
                    </span>
                    <span className="inline-flex items-center whitespace-nowrap group-hover:underline">
                    EDUCATION
                    <MdArrowOutward className="ml-1 block sm:hidden flex-shrink-0" />
                    </span>
                </span>
            </a>
            <p className="text-base text-[10px] sm:text-lg leading-snug">
              {`20 GB Per User\nUse Google Classroom with unlimited originality reports, document approvals, and 20GB cloud storage. Host Google Meet sessions with 500 participants, breakout rooms, polls, Q&A, and live streaming up to 100k viewers.`
                .split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                {processLine(line)}
                <br />
                </React.Fragment>
                ))}
            </p>
          </div>
          <Image 
            src="/images/student-perks/logo-google-perks-academix.png"
            alt="GOOGLE WORKSPACE FOR EDUCATION"
            width={200}
            height={200}
            className="ml-2 w-25 h-25 sm:ml-4 sm:w-30 sm:h-30 object-contain"
          />
        </div>

        {/* GRAMMARLY PREMIUM - Left Card */}
        <div className="flex items-center w-full max-w-[550px] mx-auto mb-12">
          <Image 
            src="/images/student-perks/logo-grammarly-perks-academix.png"
            alt="GRAMMARLY PREMIUM"
            width={200}
            height={200}
            className="mr-2 w-25 h-25 sm:mr-4 sm:w-30 sm:h-30 object-contain"
          />
          <div className="flex-1 min-w-0 text-left">
            <a
              href="https://www.grammarly.com/enterprise/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="font-trapix text-xl sm:text-3xl mb-2 flex items-center gap-2 text-mainblue hover:underline"
            >
              {/* Mobile: two lines */}
              <span className="block sm:hidden">
                GRAMMARLY
                <br />
                <span className="inline-flex items-center">
                  PREMIUM <MdArrowOutward className="ml-1 block sm:hidden" />
                </span>
              </span>
              {/* Desktop: one line */}
              <span className="hidden sm:inline-flex items-center">
                GRAMMARLY PREMIUM <MdArrowOutward className="ml-1 block sm:hidden" />
              </span>
            </a>
            <p className="text-base text-[10px] sm:text-lg leading-snug">
              {`1 TB Cloud Storage\nWrite with confidence using Grammarly Premium for free! Sign up at https://grammarly.com/enterprise/signup using your AdDU email and enjoy advanced grammar, style, and clarity suggestions.`
                .split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                {processLine(line)}
                <br />
                </React.Fragment>
                ))}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}