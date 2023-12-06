import React from 'react'
import { EMBRACE, LIST } from '@/lib/data2'
import style from './styles.module.css'
import Image from 'next/image'


export default function Embrace() {
  return (
    <div className='mx-auto container'>
         {EMBRACE.map((brace, i) => (
            <div
              key={i}
              className="pt-[9.188rem]"
            >
                <p className='mx-auto container text-center text-[#14202d] text-[2.5rem] font-bold leading-[3.5rem] break-words lg:w-[45.313rem] mb-[2.457rem]'>{brace.label}</p>
            </div>
            
            ))}

             <main className='lg:flex'>
             {LIST.map((list, i) => (
            <div
            key={i}
            className={` ${list.id === 2? style.specialStyle : ''} lg:w-[36.625rem] mx-auto container pt-[3rem] bg-[#f0f9fe] rounded-[10px] border border-[#26499D] mb-[8.125rem]`}
            >
                
                <p className='text-[#14202d] text-[2.5rem] font-bold leading-8 break-words text-center mb-[1.791rem]'>{list.label}</p>
                <p className='text-center text-[#14202d] lg:w-[32.5rem] mx-auto text-base font-normal leading-8 break-words'>{list.text}</p>
                <Image src={list.image} alt="" className='w-full'/>
                
            </div>
            ))}
             </main>
    </div>
  )
}
