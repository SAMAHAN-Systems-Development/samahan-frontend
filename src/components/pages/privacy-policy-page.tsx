import React from 'react'
import HeroBanner from '../ui/hero-banner'
import FAQAccordion from '../ui/FAQ-accordion';
import { PrivacyPolicyAccordionData } from '@/data/privacy-policy-accordion-data';
import { Button } from '../ui/button';

function PrivacyPolicyPage() {
  const QUOT = <span className="font-['Arial']">&quot;</span>;
  const COLON = <span className="font-['Arial']">:</span>;
  const OPEN_P = <span className="font-['Arial']">(</span>;
  const CLOSE_P = <span className="font-['Arial']">)</span>;
  const AT = <span className="font-['Arial']">@</span>;
  const Q_MARK = <span className="font-['Arial']">?</span>;
  const PERCENT = <span className="font-['Arial'] font-bold">%</span>;

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-white">
        <HeroBanner
        imageSrc="/images/hero-images/ABOUT-Hero.png"
        imageAlt="Privacy Policy Page Hero"
        header1="SAMAHAN"
        header2="PRIVACY POLICY"
      />

        <div className="relative z-10 flex flex-col items-center justify-center w-full text-mainblue font-formular-regular px-6 md:px-10 lg:px-15 text-sm md:text-base">
            <div className='max-w-7xl w-full pt-10 pb-15 md:pb-20 lg:pt-15 flex flex-col gap-y-15'>
                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        PRIVACY NOTICE
                    </h2>
                    <p className='mt-3'>
                        This privacy notice for Ateneo de Davao University {OPEN_P}{QUOT}we,{QUOT} {QUOT}us,{QUOT} or {QUOT}our{QUOT}{CLOSE_P} describes how and why we might collect, store, use, and/or share {OPEN_P}{QUOT}process{QUOT}{CLOSE_P} your information when you use our services {OPEN_P}{QUOT}Services{QUOT}{CLOSE_P}, such as when you: Visit our website at samahan.addu.edu.ph, or any website of ours that links to this privacy notice.
                    </p>
                    <p className='mt-5'>
                        Engage with us in other related ways, including any sales, marketing, or events. Questions or concerns{Q_MARK} Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:samahan@addu.edu.ph" className='underline'>samahan{AT}addu.edu.ph</a>.
                    </p>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        SUMMARY OF KEY POINTS
                    </h2>
                    <p className='mt-3'>
                        This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                    </p>
                    <div className='py-5'>
                        <FAQAccordion FaqAccordionData={PrivacyPolicyAccordionData} isPrivacyPolicy/>
                    </div>
                    <div className='flex flex-col w-full justify-center items-center'>
                        <p className='text-center'>
                            If you have any other questions or need help with our Privacy Policy, don&apos;t hesitate to get in touch. We&apos;re happy to assist and want to make sure you feel confident about how we handle your information. Just email us at email us at <a href="mailto:samahan@addu.edu.ph" className='underline'>samahan{AT}addu.edu.ph</a>.
                        </p>
                        <a href="mailto:samahan@addu.edu.ph">
                            <Button className='w-min mt-3 cursor-pointer'>
                                CONTACT US
                            </Button>
                        </a>
                        
                    </div>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        INFORMATION WE COLLECT
                    </h2>
                    <p className='mt-3'>
                        When you use our website, we may collect personal data that you voluntarily provide, such as your name, email address, phone number, and any other information you choose to share.
                    </p>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        COOKIES AND TRACKING TECHNOLOGIES
                    </h2>
                    <p className='mt-3'>
                        We use cookies and similar tracking technologies to enhance your experience on our site. Cookies are small data files stored on your device that help us understand how you use our website and improve our services. You can manage your cookie preferences through your browser settings.
                    </p>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        INFORMATION USAGE
                    </h2>
                    <div className='mt-3'>
                        <p>The information collected is used to{COLON}</p>
                        <ul className="list-disc pl-10 mt-2">
                            <li>Provide, maintain, and improve our website and services.</li>
                            <li>Respond to inquiries and provide customer support.</li>
                            <li>Analyze usage trends and gather insights to enhance user experience.</li>
                        </ul>
                    </div>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        INFORMATION SHARING
                    </h2>
                    <p className='mt-3'>
                        We do not sell, trade, or otherwise transfer your personal data to outside parties. However, information may be disclosed should it be required by law or to protect the rights, property, or safety of the SAMAHAN website, the users, or others.
                    </p>
                </div>

                <div className=''>
                    <h2 className="font-formular-black text-start text-2xl uppercase  md:text-3xl lg:text-4xl">
                        DATA SECURITY
                    </h2>
                    <p className='mt-3'>
                        We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100{PERCENT} secure, and we cannot guarantee absolute security.
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default PrivacyPolicyPage