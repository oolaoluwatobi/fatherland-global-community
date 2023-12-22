import React from 'react'
// import Advertising from './component/Advertising'
// import Features from './component/Features'
// import AdevertSolution from './component/AdvertSolution'
// import Faturesfatherland from './component/Faturesfatherland'
// import AdvertCreative from './component/AdvertCreative'
// import Advertwork from './component/Advertwork'
import AdvertLevel from './component/AdvertLevel'
import Advertising from './link/component/Advertising'
import Features from './link/component/Features'
import Faturesfatherland from './link/component/Faturesfatherland'
import AdevertSolution from './link/component/AdvertSolution'
import AdvertCreative from './link/component/AdvertCreative'
import Advertwork from './link/component/Advertwork'

export default function AdvertPage() {
  return (
    <section className='mx-auto max-w-[90rem] bg-[#EFF4FA]'>
        {/* <Advertising /> */}
        <Advertising />
        <Features />
        <Faturesfatherland />
        <AdevertSolution />
        <AdvertCreative />
         <Advertwork />
        <AdvertLevel />
        

    </section>
    )
}
