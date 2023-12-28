import React from 'react'
import Diversityandinclusion from './components/Diversityandinclusion'
import Team from './components/Team'
import Faq from '../exploreculturallearning/components/Faq'
import Getstarted from '../category/components/Getstarted'

export default function page() {
  return (
    <div className=' mx-auto bg-white'>
        <Diversityandinclusion />
        <Team />
        <Faq />
        <Getstarted/>
    </div>
  )
}
