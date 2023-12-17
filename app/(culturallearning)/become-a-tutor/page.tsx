import React from 'react'
import HeroSection from './components/HeroSection'
import Createyourown from './components/Createyourown'
import Boxcontent from './components/Boxcontent'
import Becomeatutor2 from './components/Becomeatutor2'
import Someofourtutors from './components/Someofourtutors'

export default function page() {
  return (
    <div className=' mx-auto bg-white max-w-[90rem]'>
      <HeroSection />
      <Createyourown />
      <Boxcontent />
      <Becomeatutor2 />
      <Someofourtutors />
    </div>
  )
}
