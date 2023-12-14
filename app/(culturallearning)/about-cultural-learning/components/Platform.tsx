'use client'
import React from 'react'
import style from './styles.module.css'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import img from '@/public/Group 127.png'


export default function Platform() {
  return (
    <div className={`${style.hero} max-w-[90rem] mx-auto lg:pt-[6.718rem] pt-5 pb-5 lg:pb-[9.679rem] `}>
        <main className='mx-auto container lg:flex justify-around items-center max-w-7xl '>
            <div className='lg:pl-[2rem]'>
                <p className='text-black lg:text-[50px] text-xl font-bold lg:leading-[65px] break-words mb-[0.188rem] text-center lg:text-start'>
                  Explore <span className='text-[#da5001]'>Cultural</span> Learning Platform</p>
                <p className='text-[#252525] lg:text-xl text-sm font-bold lg:leading-7 break-words mb-[1.875rem] text-center lg:text-start'>Powered by Fatherland Community</p>
                <p  className='text-[#55525D] text-xs lg:text-sm font-normal leading-6 break-words mb-[4.188rem] text-center lg:text-start'>Browse through recordings of previous live sessions on Africa cultures 
                    and values from our world-class instructors & tutors.</p>
                    <div className='mb-5 flex justify-center lg:justify-start'> 
                        <Button className='hover:bg-primary mr-6 text-base font-semibold break-words'>Get Started</Button>
                        <Button className='bg-transparent hover:bg-transparent text-[#03004D] border border-primary text-base font-semibold break-words'>Log In</Button>
                    </div>
            </div>

            <Image src={img} alt="" />

        </main>
    </div>
  )
}
