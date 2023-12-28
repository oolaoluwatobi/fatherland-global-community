'use client'
import React from 'react'
import Youmayalsolike from '../../category/[categoryId]/components/Youmayalsolike'

export default function Someofourtutors() {
  return (
    <div className='max-w-[77rem] containe mx-auto'>
        <main className='max-w7xl mb-[2.875rem]'>
            <p className="text-[#14202e] lg:text-[32px] text-2xl 
            font-bold lg:leading-10 break-words text-center lg:text-start ">
            Some Of Our Tutors
        </p>
            
        </main>
        <Youmayalsolike />
    </div>
  )
}
