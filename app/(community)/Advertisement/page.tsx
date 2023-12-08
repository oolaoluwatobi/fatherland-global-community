import React from 'react'
import Advertising from './component/Advertising'
import Features from './component/Features'
import AdevertSolution from './component/AdvertSolution'
import Faturesfatherland from './component/Faturesfatherland'
import AdvertCreative from './component/AdvertCreative'

export default function AdvertPage() {
  return (
    <section className='mx-auto max-w-[90rem]'>
        <Advertising />
        <Features />
        <Faturesfatherland />
        <AdevertSolution />
        <AdvertCreative/>
        

    </section>
    )
}
