'use client'
import React from 'react'
import style from './styles.module.css'
import { Montserrat } from 'next/font/google'
import { COMMUNITY } from '@/lib/data'

const momserat = Montserrat({
   subsets: ['latin'],
  //  weight:['700']
})


export default function Community() {
  const renderCummunity = COMMUNITY.find((comune => comune.id))
  console.log (renderCummunity)
  return (
    <div className='' >
        <div className={`${style.backg}`}> 
             <div className={`${momserat.className} font-[700] text-xl text-center lg:text-2xl text-white lg:pt-20 pt-8`}> {renderCummunity?.text}</div>
                
            <div className={`${momserat.className} font-[400] lg:px-32 lg:py-8 pt-8 text-sm lg:text-base container text-white text-center`} > {renderCummunity?.content}</div>
        </div>
    </div>
  )
}
