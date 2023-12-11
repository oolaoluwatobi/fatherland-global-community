import React from 'react'
import AdvertsolutionLink from './component/AdvertsolutionLink'
import Advertcontent from './component/Advertcontent'
import  Advertlevel  from './component/Advertlevel'


export default function Advertlinkpage() {
  return (
    <section className='mx-auto place-items-center  max-w-[90rem]'>
        
      <AdvertsolutionLink />
      <Advertcontent />
      <Advertlevel />
      
    </section>
  )
}
