import React from 'react'
import HeroCat from './components/HeroCat'
import Allcourses from './components/Allcourses'
import Getstarted from './components/Getstarted'
import Faq from '../exploreculturallearning/components/Faq'

export default function page() {
  return (
    <div className='bg-white max-w-[90rem] mx-auto'>
        <HeroCat />
        <Allcourses />
        <Getstarted />
        <Faq />
    </div>
  )
}
