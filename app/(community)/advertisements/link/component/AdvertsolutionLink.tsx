import React from 'react'
// import { AdvertsolutionRoute } from '@/lib/data'
// import style from './styles.module.css'
import style from './styles.module.css'
import { Montserrat } from 'next/font/google'

const monserat= Montserrat({
    subsets:['latin']
 })

export default function AdvertsolutionLink() {
  return (
    <div className={`${style.solutionimg} `}>
      <div className='px-10 pt-12 '>
      <p className={`text-white font-bold mt-28 text:lg lg:text-2xl `}>Our Solutions</p>
      <p className='text-white mt-3   text-sm lg:text-lg'>We are passionate about crafting unique and compelling advertisements that <br /> captivate your target audience and drive results.</p>
      </div>
      
    </div>
  )
}
