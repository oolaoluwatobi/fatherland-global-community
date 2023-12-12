import React from 'react'
import { Button } from '@/components/ui/button'
import style from './styles.module.css'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const monserat= Montserrat({
    subsets:['latin']
 })
export default function AdvertLevel() {
  return (
    <div className={`${style.level} mb-10 mt-20 pt-20`}>
        <div>
            <h1 className={`${monserat.className} text-center mx-auto mt-14 py-2 font-bold text-white w-[40rem]  text-[2rem] text-2xl`} >Ready to Take Your Advertising to the Next Level?</h1>
            <p className={`${monserat.className} text-lg font-[400] text-center mt-5 text-white`}>Contact us today to discuss your goals and objectives.</p>
            <Link href="advertcontact" className='flex justify-center mt-10'><Button className=' bg-orange-400 py-5 px-5 mt-3 '>Contact Us</Button></Link>
        </div>
    </div>
  )
}
