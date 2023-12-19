'use client'
import React from 'react'
import style from './style.module.css'
import { Button } from '@/components/ui/button'


export default function Banner() {
  return (
    <div className={`max-w-7xl mxauto ${style.ban} pt-[5.188rem] pb-[4.5rem] lg:pl-[4.375rem] container }`}> 
        <p className='lg:w-[31.688rem] mb-[0.563rem] lg:text-[40px] text-xl font-bold break-words text-white leading-10'>Sign up now to see all classes and sessions!</p>
        <p className='lg:w-[28.938rem] text-white text-base font-medium leading-6 break-words mb-[1.563rem]'>Starting at $4.99/month (billed annually) for all classes and sessions</p>
        <Button className='text-[#15375F] bg-white hover:bg-white text-base font-semibold'>Sign up</Button>
    </div>
  )
}
