'use client'
import React from 'react'
import Youmayalsolike from '../../category/[categoryId]/components/Youmayalsolike'

export default function Someofourtutors() {
  return (
    <div className='max-w-[90rem] mx-auto lg:pl-8'>
        <main className='max-w-7xl container'>
            <p className="text-[#14202e] lg:text-[32px] text-base 
            font-bold lg:leading-10 break-words text-center lg:text-start ">
            Some Of Our Tutors
        </p>
            <Youmayalsolike />
        </main>

    </div>
  )
}
