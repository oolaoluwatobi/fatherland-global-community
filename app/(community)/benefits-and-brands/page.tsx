import React from 'react'
import Hero from './components/Hero'
import EverydatValue from './components/EverydatValue'
import Xclusivecard from '@/app/components/Xclusivecard'
import PremiunBenefits from './components/PremiunBenefits'
import Getstarted from '@/app/components/Getstarted'

export default function page() {
  return (
    <div>
      <Hero />
      <EverydatValue />
      <Xclusivecard />
      <PremiunBenefits />
      <Getstarted />
    </div>
  )
}
