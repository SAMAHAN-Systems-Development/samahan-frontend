import TabHeader from '@/components/ui/tab-header'
import Image from 'next/image'

function renderWithFallbackFont(text: string) {
  return text.split(/([~!@#$%^&*()_+{}\[\]:"<>?;',.\/\\])/).map((segment, idx) => {
    if (segment && /[~!@#$%^&*()_+{}\[\]:"<>?;',.\/\\]/.test(segment)) {
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

export default function AcademicArms () {
    return (
        <div className="flex flex-col items-center">
            <TabHeader name="GET TO KNOW YOUR CLUSTER ACADEMIC ARMS"/>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-1 md:gap-x-14 mt-8 text-mainblue font-formular-regular w-full max-w-6xl">
                
                <div className="flex flex-col text-center items-center col-span-1 sm:col-span-2 md:col-span-3 max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/main-logo-academix.png'
                        alt='main'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">MAIN</div>
                    <div className="justify-center text-md mt-4">
                        {renderWithFallbackFont('SAMAHAN Department of Academic Affairs')}
                    </div>
                </div>

                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/accountancy-logo-academix.png'
                        alt='acc'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">ACCOUNTANCY</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('Accountancy Students’ Scholastic Events and Tutorials Support (ASSETS)')}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/B&M-logo-academix.png'
                        alt='bm'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">BUSINESS & MANAGEMENT</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('B&M Academic Affairs Department')}
                    </div>
                </div> 
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/CS-logo-academix.png'
                        alt='cs'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">COMPUTER STUDIES</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('Ateneo Circle of Computer Enthusiasts for Study and Success (ACCESS)')}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/humlet-logo-academix.png'
                        alt='humlet'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">HUMANITIES & LETTERS</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('Wolves Academic Affairs Space')}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/nsm-logo-academix.png'
                        alt='nsm'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">NATURAL SCIENCE & MATHEMATICS</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('NSM Educational Services and Tutorials (NEST)')}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/SOE-logo-academix.png'
                        alt='soe'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">SCHOOL OF EDUCATION</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('The Seaside Academic Den')}
                    </div>
                </div>
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/SON-logo-academix.png'
                        alt='son'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">SCHOOL OF NURSING</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('Panthers Academic Tutorials and Services (PATS)')}
                    </div>
                </div> 
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4">
                    <Image
                        src='/images/academic-arms/socialsciences-logo-academix.png'
                        alt='ss'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">SOCIAL SCIENCES</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('Social Sciences Committee of Academic Leaders (SCALES)')}
                    </div>
                </div> 
                <div className="flex flex-col text-center items-center max-w-[250px] w-full mx-auto my-4 sm:col-span-2 md:col-span-1">
                    <Image
                        src='/images/academic-arms/SEA-logo-academix.png'
                        alt='sea'
                        height={200}
                        width={200}
                        className='w-40 h-40 sm:w-50 sm:h-50 mb-2 object-contain'
                    />
                    <div className="font-trapix text-2xl">SCHOOL OF ENGINEERING & ARCHITECTURE</div>
                    <div className="justify-center text-md mt-4 ">
                        {renderWithFallbackFont('SEA Central Warehouse')}
                    </div>
                </div>     
            </div>
        </div>
    )
}