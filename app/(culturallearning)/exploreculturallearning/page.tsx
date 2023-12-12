import React from 'react'
import HeroSection from './components/HeroSection'
import Schoolandclassroom from './components/Schoolandclassroom'

export default function page() {
  return (
    <div className='max-w-[90rem] mx-auto bg-white'>
        <HeroSection />
        <Schoolandclassroom />
    </div>
  )
}
