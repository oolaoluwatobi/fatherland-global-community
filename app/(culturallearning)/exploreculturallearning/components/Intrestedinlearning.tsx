'use client'
import React from 'react'
import style from './styles.module.css'
import { Button } from '@/components/ui/button'


export default function Intrestedinlearning() {
  return (
    
    <div className={`lg:mb-[6.482rem]  max-w-[90rem] mx-auto ${style.bt2} bg-[#fff3e5] pt-5 lg:mt-[7rem] mt-8 lg:pb-[6.563rem] pb-5 lg:pt-[6.625rem]`}>
        <main className='max-w-7xl mx-auto container mb-[3.125rem]'>
        <p className='text-[#002a0c] lg:text-[40px] mx-auto text-center pb-[0.313rem]
         text-xl font-bold  lg:leaing-[50px] break-words'>Interested in learning more on African cultures and values?</p>
        <p className='text-center text-[#002a0c] font-medium lg:leading-8 break-words lg:text-xl text-sm'>Members can continue the conversation in the Community</p>
        </main>

        <div className='flex justify-center gap-3 '>
            <Button className='hover:bg-primary'>Sign Up</Button>
             <Button className='text-[#03004D] bg-transparent hover:bg-transparent border border-primary'> Explore Classes</Button>
        </div>

    </div>
    
  )
}
