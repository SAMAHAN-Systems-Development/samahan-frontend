import React from 'react'
import FAQCategorySection from '../sections/faq-category-section'
import HeroBanner from '../ui/hero-banner';

function FAQPage() {
  return (
    <div className='flex flex-col min-h-screen relative'>
      <HeroBanner
        imageSrc="/images/hero-images/FAQ-Hero.png"
        imageAlt="FAQ Page Hero"
        header2="FREQUENTLY ASKED QUESTIONS"
      />
      <FAQCategorySection />
    </div>
  )
}

export default FAQPage