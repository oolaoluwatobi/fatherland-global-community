'use client'
import React from 'react'
import style from './styles.module.css'
import { DotFilledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'


export default function Becomeatutor() {
     const router=useRouter()
  return (
    <main className='container max-w-7xl'>
     <div className={`mx-auto max-w-7xl ${style.bt} pt-[2.556rem] rounded-[10px] container pb-[2rem]`}>
        <p className='text-white lg:text-[40px] text-2xl font-bold lg:leaing-[50px] break-words pb-4 text-center lg:text-start'>Become A Tutor</p>
        <p className='max-w-[34.313rem] text-white lg:text-xl text-sm font-medium break-words mb-[1.886rem]  text-center lg:text-start'>Gain great autonomy by using videos to reach a
         broader audience than ever before.</p>

         <div className='lg:grid grid-cols-2 max-w-3xl gap-4 pb-[2.188rem] mb-4 lg:mb-0'>
            <p className='text-black lg:text-base text-xs font-normal rounded-[7px] flex 
            leading-6 break-words bg-white pl-[37px] pr-[14px] py-[12px] max-w-[24.625rem] mb-4 lg:mb-0'>
                 <DotFilledIcon className='mr-3'/>Introducing Your Institution to Potential Students & Learners </p>
            <p className='text-black lg:text-base text-xs font-normal rounded-[7px] flex 
            leading-6 break-words bg-white pl-[37px] pr-[14px] py-[12px] max-w-[24.625rem] mb-4 lg:mb-0'>
                 <DotFilledIcon className='mr-3'/>Facilitate the Admissions and Acceptance Process </p>
            <p className='text-black lg:text-base text-xs font-normal rounded-[7px] flex 
            leading-6 break-words bg-white pl-[37px] pr-[14px] py-[12px] max-w-[24.625rem] mb-4 lg:mb-0'>
                 <DotFilledIcon className='mr-3'/>Introduce Potential Students & Learners to Institution & Organization Proper </p>
            <p className='text-black lg:text-base text-xs font-normal rounded-[7px] flex 
            leading-6 break-words bg-white pl-[37px] pr-[14px] py-[12px] max-w-[24.625rem]'>
                 <DotFilledIcon className='mr-3'/>Teach Course Material: Use videos to deliver course information  </p>
         </div>

        <div className='flex justify-center lg:justify-start'>
          <Button className='text-[#2db6b9] text-base font-semibold break-words px-[3.125rem] py-[0.938rem] bg-white hover:bg-white
          ' onClick={()=>router.push('/become-a-tutor')}>Become a Tutor</Button></div>
    </div>
    </main>
  )
}
