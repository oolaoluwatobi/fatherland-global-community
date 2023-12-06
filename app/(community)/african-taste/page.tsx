import React from 'react'
import Hero from './components/Hero'
import Embrace from './components/Embrace'
import Amazingdeals from './components/Amazingdeals'
import Partofcommunity from './components/Partofcommunity'
import Howitworks from './components/Howitworks'

export default function pageAfricantaste() {
  return (
    <div className='mx-auto max-w-[90rem]'>
        <Hero />
        <Embrace />
        <Amazingdeals />
        <Partofcommunity />
        <Howitworks />
    </div>
  )
}
