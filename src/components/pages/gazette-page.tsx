import React from 'react'
import ConstitutionFile from '../ConstitutionFile'
import DocumentEntry from '@/components/sections/document-entry'

function GazettePage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <ConstitutionFile />
        <div className='h-10'></div>
    </div>
  )
}

export default GazettePage
