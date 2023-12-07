import React from 'react'
import AfricanCommunity from './components/AfricanCommunity'
import Objectives from './components/Objectives'
import WhyWeAreHere from './components/WhyWeAreHere'
import BusinessModel from './components/BusinessModel'
import JoinFamily from './components/JoinFamily'

export default function page() {
  return (
    <main className='mx-auto max-w-[90rem] bg-white'>
      <AfricanCommunity />
      <Objectives />
      <WhyWeAreHere />
      <BusinessModel />
      <JoinFamily />
    </main>
  )
}
