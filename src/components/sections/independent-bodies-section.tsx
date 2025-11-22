import React from 'react'
import IndependentBodies from '../ui/independent-bodies'

function IndependentBodiesSection() {
  return (
    <div className='grid grid-cols-2 xl:grid-cols-3 min-h-max gap-y-16'>
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/coa.png',
                imgAlt: 'Commission on Audit Logo'
            }}
            organizationName="COMMISSION ON AUDIT"
            facebookName="AdDU Commission on Audit"
            facebookLink={'https://www.facebook.com/addu.coa'}
        />
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/comelec.png',
                imgAlt: 'Commission on Election Logo'
            }}
            organizationName="COMMISSION ON ELECTION"
            facebookName="AdDU COMELEC"
            facebookLink={'https://www.facebook.com/comelecaddu'}
        />
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/ssc.png',
                imgAlt: 'SAMAHAN Student Court Logo'
            }}
            organizationName="SAMAHAN Student Court"
            facebookName="Samahan Student Court"
            facebookLink={'https://www.facebook.com/SAMAHANSC'}
        />
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/straw.png',
                imgAlt: 'COMMISSION ON STUDENTS\' RIGHTS AND WELFARE Logo'
            }}
            organizationName="COMMISSION ON STUDENTS' RIGHTS AND WELFARE"
            facebookName="SAMAHAN Commission on Students' Rights and Welfare"
            facebookLink={'https://www.facebook.com/SAMAHANStRAW'}
        />
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/ssa.png',
                imgAlt: 'SAMAHAN STUDENT ASSEMBLY Logo'
            }}
            organizationName="SAMAHAN STUDENT ASSEMBLY"
            facebookName="SAMAHAN Office of the Vice President and the Student Assembly "
            facebookLink={'https://www.facebook.com/samahanovpsa'}
        />
        <IndependentBodies 
            image={{
                imgSource: '/images/independent-bodies/ccp.png',
                imgAlt: 'SAMAHAN Council of Class Presidents Logo'
            }}
            organizationName="SAMAHAN Council of Class Presidents"
            facebookName="ADDU Council of Class Presidents"
            facebookLink={'https://www.facebook.com/adduccp'}
        />
    </div>
  )
}

export default IndependentBodiesSection