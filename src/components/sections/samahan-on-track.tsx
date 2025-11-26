'use client'
import React from 'react'
import { ArrowRight, ArrowDown } from 'lucide-react'
import TabHeader from '../ui/tab-header';

export default function OnTrack() {
  const stepsRow1 = [
    "crafting of concept paper",
    "submission to google forms",
    "review by program officer",
    "sending of confirmation email to moderator"
  ];

  const stepsRow2 = [
    "endorsement of moderator",
    "recommendation for approval of event",
    "approval of OSA director",
    "post event: process kukang" 
  ];

  const venueData = [
    { venue: "Arrupe Hall", office: "OSA" },
    { venue: "Classrooms (Activity Period)", office: "OSA" },
    { venue: "Finster Auditorium", office: "PPO" },
    { venue: "F213 Multi-Purpose Room", office: "PPO" },
    { venue: "Bapa Benny Tudtud Auditorium", office: "PPO" },
    { venue: "CCFC Building (3rd floor)", office: "Ma'am Su's office (9th floor)" },
    { venue: "CCFC Building (8th floor)", office: "UCEAC" },
    { venue: "Miguel Pro Learning Commons", office: "Miguel Pro library" },
    { venue: "Martin Hall (4th floor)", office: "Athletics Office" },
    { venue: "Classrooms (Regular school days)", office: "Registrar's Office" },
  ];

  const indent_1 = "lg:ml-5.5"
  const indent_2 = "ml-11"
  const indent_3 = "ml-11 lg:ml-16"

  return (
    <div className='text-mainblue font-formular text-sm sm:text-base'>
      <TabHeader name="SAMAHAN ON TRACK"/>
      <div className='px-4 lg:px-0'>
        <div className='mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl'>Student Activities</div>
        <div className='mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-3xl'>Student Activities</div>
        <ul className={`${indent_2} list-disc mt-3`}>
          <li>student-led initiatives</li>
          <li>passion and advocacy projects</li>
          <li>income generating projects</li>
          <li>general assemblies</li>
          <li>academic and non-academic related activities</li>
        </ul>
        <div className={`mt-5 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0`}>
          <div className='flex-1'>
            <div className={`${indent_1} ml-5.5 text-xl lg:text-lg lg:font-semibold`}>
              Co-Curricular
            </div>
            <div className={`${indent_2} mt-1`}>
              activities concerned with the improvement and enhancement of the academic experience.
            </div>
          </div>
          <div className='flex-1'>
            <div className={`${indent_1} ml-5.5 text-xl lg:text-lg lg:font-semibold`}>
              Extra-Curricular
            </div>
            <div className={`${indent_2} mt-1`}>
              activities following these areas: community service, sports and games, cultural, social, special projects and spiritual
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <div className={`lg:ml-5.5 text-2xl lg:text-lg font-formular-medium`}>
            Concept Paper
          </div>
          <div className={`ml-5.5 lg:ml-11 mt-1`}>
            proposal of project overview of planned activity important document the blood of the activity framework of plans contains important details
          </div>
        </div>
        <div className='mt-8'>
          <div className={`${indent_1} text-2xl lg:text-lg font-formular-medium`}>
            Process of Approval for Off-Campus Activities
          </div>
          <div className="w-full mx-auto p-4 md:p-10">
            {/* ROW 1 */}
            {/* Added mb-20 to create space for the connector */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8 relative mb-3 lg:mb-22 ">
              {stepsRow1.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative group">
                      
                      <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-base font-medium z-10">
                      {step}
                      </div>

                      {index !== stepsRow2.length - 1 && (
                      <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                          <ArrowRight size={24} />
                      </div>
                      )}

                      {index !== stepsRow2.length - 1 && (
                          <div className="lg:hidden mt-3 text-[#3b5998]">
                            <ArrowDown size={24} />
                          </div>
                      )}

                      {index == stepsRow2.length - 1 && (
                          <div className="block lg:hidden mt-3 text-[#3b5998]">
                            <ArrowDown size={24} />
                          </div>
                      )}

                      
                  </div>
              ))}

              {/* --- CUSTOM CONNECTOR (Desktop Only) --- */}
              {/* Positioned absolutely at the bottom of Row 1, extending down into the gap */}
              <div className="hidden lg:block absolute left-0 -bottom-20 w-full h-20 pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible">
                      <defs>
                          <marker 
                              id="arrowhead-down" 
                              markerWidth="10" 
                              markerHeight="7" 
                              refX="5" 
                              refY="3.5" 
                              orient="auto"
                          >
                              <polygon points="0 0, 10 3.5, 0 7" fill="#3b5998" />
                          </marker>
                      </defs>

                      {/* We use <line> elements because they accept percentages (%).
                        Grid logic: 4 cols. 
                        Center of last col (4th) is approx ~87.5% width.
                        Center of first col (1st) is approx ~12.5% width.
                      */}
                      
                      {/* 1. Vertical Line Down from Row 1, Item 4 */}
                      <line 
                          x1="87.5%" y1="0" 
                          x2="87.5%" y2="50%" 
                          stroke="#3b5998" 
                          strokeWidth="2" 
                      />

                      {/* 2. Horizontal Line Across (Right to Left) */}
                      <line 
                          x1="87.5%" y1="50%" 
                          x2="12.5%" y2="50%" 
                          stroke="#3b5998" 
                          strokeWidth="2" 
                      />

                      {/* 3. Vertical Line Down to Row 2, Item 1 */}
                      <line 
                          x1="12.5%" y1="50%" 
                          x2="12.5%" y2="100%" 
                          stroke="#3b5998" 
                          strokeWidth="2" 
                          markerEnd="url(#arrowhead-down)"
                      />
                  </svg>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-8">
              {stepsRow2.map((step, index) => (
                  <div key={index} className="flex flex-col items-center relative group">
                      
                      <div className="w-full border-2 border-[#3b5998] bg-white flex items-center justify-center h-14 md:h-20 px-5 text-center text-[#3b5998] text-base font-medium z-10">
                      {step}
                      </div>

                      {index !== stepsRow2.length - 1 && (
                      <div className="hidden lg:flex absolute -right-7 top-1/2 -translate-y-1/2 text-[#3b5998]">
                          <ArrowRight size={24} />
                      </div>
                      )}

                      {index !== stepsRow2.length - 1 && (
                          <div className="lg:hidden mt-4 text-[#3b5998]">
                          <ArrowDown size={24} />
                          </div>
                      )}
                  </div>
              ))}
            </div>

          </div>
        </div>
        <div className='mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl'>Venues</div>
        <div className='mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl'>Venues</div>
        <div className='mt-3'>
          <div className={`${indent_1} text-xl lg:text-lg lg:font-semibold`}>
            Classification of Venues
          </div>
          <ul className={`${indent_3} list-disc`}>
            <li>in campus</li>
            <li>off campus</li>
            <li>online</li>
          </ul>
        </div>
        <div className='mt-3'>
          <div className={`${indent_1} text-xl lg:text-lg lg:font-semibold`}>
            In-Campus Activities and Venues
          </div>
          <ol className={`${indent_3} list-decimal`}>
            <li>submitted at least 10 days before the event date</li>
            <li>always check the concept paper before submission</li>
            <li>have it checked by your moderator and consult</li>
            <li>OSA does not reserve ALL venues in the University</li>
            <li>always coordinate with other offices and be polite</li>
          </ol>
        </div>
        <div className='w-full flex justify-center items-center mt-3'>
          {/* Outer container: No border here anymore, we rely on the cell borders */}
          <div className="overflow-x-auto w-full max-w-4xl mx-auto">
            <table className="min-w-full bg-white border-collapse">
                <tbody>
                    {venueData.map((item, index) => (
                        <tr key={index}>
                            {/* Venue Column: Needs Top, Bottom, Left, and Right borders */}
                            <td 
                                className="py-3 px-4 text-sm text-center font-medium border border-mainblue" 
                            >
                                {item.venue}
                            </td>
                            {/* Office Column: Needs Top, Bottom, and Right borders */}
                            <td className="py-3 px-4 text-sm text-center border border-mainblue">
                                {item.office}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
        <div className='mt-7 lg:mt-12 font-formular-medium lg:hidden lg:uppercase text-2xl lg:text-3xl'>Off-Campus Activities and Venues</div>
        <div className='mt-7 lg:mt-12 hidden lg:block font-trapix lg:uppercase text-2xl lg:text-2xl'>Off-Campus Activities and Venues</div>
        <ol className={`${indent_3} list-decimal mt-2`}>
          <li>submitted at least 20 days before the event date</li>
          <li>submit CHED requirements at least 10 days before the event date</li>
          <li>always check the concept paper before submission</li>
          <li>have it checked by your moderator and consult</li>
          <li>OSA does not reserve ALL venues in the University</li>
          <li>always include the letter of invitation</li>
          <li>process and comply the CHED requirements (CHED Memo 63, series of 2017)</li>
        </ol>
      </div>
    </div>
    
  )
}