import React from 'react'
import Advertising from './component/Advertising'
import Features from './component/Features'
import Solution from './component/Solution'

export default function AdvertPage() {
  return (
    <section className='mx-auto max-w-[90rem]'>
        <Advertising />
        <Features />
        <Solution />
    </section>
    )
}
