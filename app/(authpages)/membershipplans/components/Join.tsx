'use client'
import React from 'react'
import Image from 'next/image'
// import k1 from '@/public/joingroup.png'
import style from './styles.module.css'
import { joinFatherlandCommunityBanner } from '@/lib/data2'
export default function Join() {
  return (
    <div className=' max-w-[90rem] bg-[#fcf1e5] mx-auto container'>
        
        {joinFatherlandCommunityBanner.map((list, i) => (
            <div
            key={i}
            className={`pb-[4.438rem] pt-[3.25rem] lg:flex justify-around items-center`}
            >
            <Image src={list.image} alt='' className='mx-auto pt-12 '></Image>
            <div className={`${style.bleft} mx-auto lg:w-[45rem] h[23.125rem] mb5`}>
            <p className='text-5xl font-extrabold leading-10 break-words pb-[1.375rem] text-black'>{list.label}</p>
            <p className='lg:w-[35.688rem] text-[14202Drem] font-normal leading-6 break-words pb-[2.25rem]'> {list.text}</p>
            <button className='bg-[#FF8800] text-white font-semibold text-base break-words px-[10px] rounded-[5px] py-[18px]'>Join Fatherland Community</button>
        </div>
                
            </div>
            ))}
     
    </div>
  )
}
