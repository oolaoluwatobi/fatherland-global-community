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
    <div className={`${style.solutionimg}`}>
      <div className='ml-20 pt-12 lg:w-10'>
      <p className={`text-white font-bold lg:w-[36rem] mt-28 text-2xl `}>Our Solutions</p>
      <p className='text-white mt-3 lg:w-[42rem] text-lg'>We are passionate about crafting unique and compelling advertisements that captivate your target audience and drive results.</p>
      </div>
      
    </div>
  )
}
