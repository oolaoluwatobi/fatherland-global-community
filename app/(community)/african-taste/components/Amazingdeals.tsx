'use client'
import React from 'react'
import style from './styles.module.css'
import { EMBRACEMEAL } from '@/lib/data2'

export default function Amazingdeals() {
  return (
    <div className='mx-auto  max-w-7xl'>

       <main className='container'>
       <div className={`border-[10px] ${style.b11} border-t-0 border-b-0 border-r-0 lg:mb-[7.438rem] mb-8 container mx-auto `}>
            <p className='text-[#14202d] lg:text-[3rem] font-extrabold lg:leading-[58px] break-words lg:w-[54.438rem] lg:mb-[1.5rem] mb-2'>Unlock <span className={`${style.b1}`}>amazing deals</span> and enjoy 
            significant savings on every visit to our partner restaurants</p>
            <p className='lg:w-[48.313rem] lg:text-base text-xs font-normal leading-6 break-words'>Fatherland Community reveals how a group of people is bound geographically, 
            culturally, linguistically, religiously, and economically in the challenging world for Africans and African Descendants.</p>
        </div>

        
        <div className='lg:flex justify-between lg:mb-[5.625rem] rounded-[10px] containe'>
        {EMBRACEMEAL.map((meal, i) => (
            <div
              key={i}
              className={`${style.bb1} ${meal.id === 2? style.bb2 : ''} lg:w-[36.25rem]  rounded-[10px] mb-5`}
            >
                <div className={`${style.hher} rounded-[10px]`}>
                <p className={`lg:pt-[13.103rem] pt-20 text-white text-center lg:text-start mx-auto lg:w-[32.5rem] lg:text-base text-xs pb-[2.185rem]`}>{meal.text}</p>
                </div>
            </div>
            
            ))}
        </div>
       </main>
    </div>
  )
}
