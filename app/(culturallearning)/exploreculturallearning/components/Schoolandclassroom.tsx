'use client'
import React from 'react'
import Image from 'next/image'
import hey from '@/public/Frame 101.png'
import { Button } from '@/components/ui/button'

export default function Schoolandclassroom() {
  return (
    <div className='bg-white max-w-[90rem] pt-8 lg:pt-[4.813rem] lg:mb-[9.563rem] mb-5'>
        <main className='lg:pl-[6.25rem] lg:flex justify-around items-center'>
            <Image src={hey} alt="" className='container lg:w-[44.188rem lg:h-[25.5rem]'/>

            <div className='mx-auto container mt-5 lg:mt-0'>
                <p className='text-[#FF8800] px-[2.063rem] py-[8px] text-sm lg:text-base font-semibold break-words bg-[#ffe3da]
                rounded-[20px] mb-[1.438rem] lg:max-w-[13.875rem] w-full text-center'>School & Classroom</p>

                <p className='lg:text-[45px] text-xl text-center lg:text-start font-bold lg:leading-[62px] break-words max-w-[36.938rem] mb-[0.625rem]
                '><span className='text-[#FF8800] max-w-[36.938rem]'>Robust</span> formats for 
                <span className='text-[#FF8800] pl-2'>flexible</span> and <span className='text-[#FF8800]'>on demand</span> Africa cultural learning</p>
                <p className='max-w-[31.375rem] lg:text-base text-sm font-normal break-words mb-[1.75rem] text-center lg:text-start'>Streaming platform that makes it possible for 
                anyone to watch or listen to hundreds of video lessons 
                taught by erudite tutors on African cultures and values for Africans</p>

                <Button className='hover:bg-primary px-[2.5rem] py-[13px]'>View Courses</Button>

            </div>
        </main>

    </div>
  )
}
