import React from 'react'
import Advertising from './component/Advertising'
import Features from './component/Features'
import AdevertSolution from './component/AdvertSolution'
import Faturesfatherland from './component/Faturesfatherland'
import AdvertCreative from './component/AdvertCreative'
import Advertwork from './component/Advertwork'
import AdvertLevel from './component/AdvertLevel'

export default function AdvertPage() {
  return (
    <section className='mx-auto max-w-[90rem]'>
        <Advertising />
        <Features />
        <Faturesfatherland />
        <AdevertSolution />
        <AdvertCreative/>
        <Advertwork />
        <AdvertLevel />
        

    </section>
    )
}
