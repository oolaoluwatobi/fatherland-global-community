'use client'
import React from 'react'
import Image from 'next/image'
import { joinFatherlandCommunityBanner } from '@/lib/data2'
import style from './styles.module.css'



export default function Join() {
  return (
    <div className=' max-w-[90rem] bg-[#e6f5f9] mx-auto'>   

        {joinFatherlandCommunityBanner.map((list, i) => (
            <div
            key={i}
            className={`pb-[4.438rem] pt-[3.25rem] lg:flex justify-around items-center`}
            >
            <Image src={list.image} alt='' className='mx-auto pt-12 '></Image>
            <div className={` mx-auto lg:w-[45rem] h[23.125rem] mb5 border-[10px] borderprimary border-l-0 border-t-0 border-b-0 lg:ps12 ${style.bfd} rounded-t-[10px] rounded-b-[10px]`}>
            <p className='text-5xl font-extrabold leading-10 break-words pb-[1.375rem] text-[#0BA1BA]'>{list.label2}</p>
            <p className='lg:w-[35.688rem] text-[14202Drem] font-normal leading-6 break-words pb-[2.25rem]'> {list.text}</p>
            <button className={`text-white font-semibold text-base break-words px-[1.188rem] rounded-[5px] py-[0.688rem] ${style.fb1}`}>Join Fatherland Community</button>
        </div>
                
            </div>
            ))}
    </div>
  )
}
