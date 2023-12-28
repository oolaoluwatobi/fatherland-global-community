'use client'
import React from 'react'
import img from '@/public/Group 99.png'
import Image from 'next/image'
import { DotFilledIcon } from '@radix-ui/react-icons'



export default function Eclcampus() {
  return (
    <div className='bg-white pt-8 lg:pt-[4.813rem] lg:mb-[9.563rem] mb-5'>
    <main className='max-w-7xl mx-auto lg:flex justify-around itemscenter'>
       
        <div className='mx-auto container lg:mt-0'>
            <p className='text-black px-[2.063rem] py-[8px] text-sm lg:text-base font-semibold break-words bg-[#a8eeb7]
            rounded-[20px] mb-[1.438rem] lg:max-w-[13.875rem] w-full text-center'>Campus</p>

            <p className='lg:text-[32px] text-2xl text-center lg:text-start font-bold lg:leading-[58px] 
            break-words max-w-[39.375rem] mb-[0.625rem]
            '>ECL Campus: A Cultural Learning Platform to Upscale Knowledge About Africa.</p>
            <p className='max-w-[30.375rem] lg:text-base text-sm font-normal break-words mb-[1.75rem] text-center lg:text-start'>
            Learn from the best Africa learning platform and be the best you can. 
            </p>

                <main>
                    <p className='lg:text-base text-sm font-normal break-words mb-[1.75rem] flex'> <DotFilledIcon className='text-4xl  mr-2'/> Develop fascinating historical Africa contents with reasonable premium that focuses on key categories of Africa setting</p>
                    <p className='lg:text-base text-sm font-normal break-words mb-[1.75rem] flex'> <DotFilledIcon className='text-4xl  mr-2'/>Hands-on learning African rich values that are almost endangered due to modernization</p>
                    <p className='lg:text-base text-sm font-normal break-words mb-[1.75rem] flex'><DotFilledIcon className='text-4xl  mr-2'/>Custom learning pathways tailored to Africa setting in which Explore Cultural Learning has taken the responsibility</p>
                    <p className='lg:text-base text-sm font-normal break-words mb-[1.75rem] flex'><DotFilledIcon className='text-4xl  mr-2'/>Explore Cultural Learning has rich insights to measure and upscale the impact of Africa customs and values</p>
                </main>

        </div>
        <Image src={img} alt="" className='container lg:w-[44.188rem lg:h-[25.5rem' />
    </main>

</div>
  )
}
