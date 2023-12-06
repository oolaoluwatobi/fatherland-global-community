'use client'
import React from 'react'
import style from './styles.module.css'
import { EMBRACEMEAL } from '@/lib/data2'

export default function Amazingdeals() {
  return (
    <div className='mx-auto container'>

        <div className={`border-[10px] ${style.b11} border-t-0 border-b-0 border-r-0 mb-[7.438rem] container mx-auto lg:ml-8`}>
            <p className='text-[#14202d] text-[3rem] font-extrabold leading-[58px] break-words lg:w-[54.438rem] mb-[1.5rem]'>Unlock <span className={`${style.b1}`}>amazing deals</span> and enjoy 
            significant savings on every visit to our partner restaurants</p>
            <p className='lg:w-[48.313rem] text-base font-normal leading-6 break-words'>Fatherland Community reveals how a group of people is bound geographically, 
            culturally, linguistically, religiously, and economically in the challenging world for Africans and African Descendants.</p>
        </div>

        
        <div className='lg:flex justify-around lg:mb-[5.625rem] rounded-[10px]'>
        {EMBRACEMEAL.map((meal, i) => (
            <div
              key={i}
              className={`${style.bb1} ${meal.id === 2? style.bb2 : ''} lg:w-[36.25rem]  rounded-[10px] mb-5`}
            >
                <div className={`${style.hher} rounded-[10px]`}>
                <p className={`lg:pt-[13.103rem] text-white mx-auto lg:w-[32.5rem] pb-[2.185rem]`}>{meal.text}</p>
                </div>
            </div>
            
            ))}
        </div>
    </div>
  )
}
