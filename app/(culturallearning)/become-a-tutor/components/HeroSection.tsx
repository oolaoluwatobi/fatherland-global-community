'use client'
import React from 'react'
import style from './styles.module.css'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


export default function HeroSection() {
    const router=useRouter()
  return (
    <div className={` ${style.hero} mx-auto lg:pt-[11.125rem] pt-5 lg:pb-[7.391rem] pb-5 lg:mb-[9.234rem] mb-5`}>
        <main className='max-w-7xl mx-auto container'>
            <p className='lg:w-[36.625rem] text-[#263238] font-bold lg:text-[58px] text-2xl lg:leading-[65px] break-words text-center lg:text-start lg:mb-[1.454rem] mb-5'>Become A Great Online Tutor</p>

            <p className='lg:w-[32.75rem] text-center lg:text-start text-[#263238] text-base font-medium leading-6 break-words lg:mb-[1.451rem] mb-5'>
            Become a tutor on ECL and Gain great autonomy by using videos to reach a broader audience than ever before.
            </p>

            <div className='flex justify-center lg:justify-start'>
                <Button className='lg:w-[14.25rem] bg-white hover:bg-white text-[#03004d] text-base font-semibold break-words py-4 px-12' onClick={()=>router.push('/become-a-tutor')}>Become a Tutor</Button>
            </div>
        </main>

    </div>
  )
}
