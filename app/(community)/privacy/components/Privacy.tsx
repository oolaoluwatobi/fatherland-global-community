'use client'
import React from 'react'
import style from './styles.module.css'

export default function Privacy() {
  return (
    <div className={`container mx-auto lg:max-w-7xl ${style.hero} lg:pt-[10.563rem] pt-12 pb-10 lg:pb-[6.813rem] rounded-[25px] lg:mb-[3.063rem] mb-5`}>

        <div className='flex justify-center mb-[0.625rem]'><p className='text-white rounded-[20px] bg-[#FFFFFF30] lg:text-xl text-sm font-medium break-words px-[50px] py-[5px]'>Privacy Policy</p></div>
        <p className='text-white lg:text-[58px] font-extrabold text-center text-lg lg:leading-[65px] break-words'>Privacy</p>

    </div>
  )
}
