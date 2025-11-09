import React from 'react'
import ConstitutionFile from '../ConstitutionFile'
import DocumentEntry from '@/components/sections/document-entry'

function GazettePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <ConstitutionFile />
        <div className='h-10'></div>
        <DocumentEntry
          documentName='SBN-2817: SAMAHAN POLITICAL AFFAIRS AND ENGAGEMENTS DEPARTMENT'
          description='An Act Establishing the SAMAHAN Political Affairs and Engagements Department'
          office='Office of the Legislative Secretary'
          actNumber={1}
          year={2024}
          date={new Date("2024-10-08")}
          href={"/"}
        />
        <DocumentEntry
          documentName='SBN-2817: SAMAHAN POLITICAL AFFAIRS AND ENGAGEMENTS DEPARTMENT'
          description='An Act Establishing the SAMAHAN Political Affairs and Engagements Department'
          office='Office of the Legislative Secretary'
          actNumber={1}
          year={2024}
          date={new Date("2024-10-08")}
          href={"/"}
        />
        <DocumentEntry
          documentName='SBN-2817: SAMAHAN POLITICAL AFFAIRS AND ENGAGEMENTS DEPARTMENT'
          description='An Act Establishing the SAMAHAN Political Affairs and Engagements Department'
          office='Office of the Legislative Secretary'
          actNumber={1}
          year={2024}
          date={new Date("2024-10-08")}
          href={"/"}
        />
    </div>
  )
}

export default GazettePage