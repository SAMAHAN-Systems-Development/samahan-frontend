import React from 'react'
import ProjectCard from '../ui/ProjectCard'
import OfficeCard from '../ui/OfficeCard'

function OfficesPage() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <ProjectCard 
            imageUrl="/images/placeholder.png"
            title='title'
            description='Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'
            url='/'
        />
        <div className='h-20'></div>
        <OfficeCard 
            imageUrl='/images/placeholder.png'
            officeName='Office of the Vice President'
            href='/'
        />
        <div className='h-20'></div>
    </div>
  )
}

export default OfficesPage