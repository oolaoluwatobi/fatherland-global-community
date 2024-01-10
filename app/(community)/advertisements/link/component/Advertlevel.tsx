import React from 'react'
import { Button } from '@/components/ui/button'
import style from './styles.module.css'
import { Montserrat } from 'next/font/google'
import Link from 'next/link'

const monserat= Montserrat({
    subsets:['latin']
 })

export default function Advertlevel() {
  return (
    <div className={`${style.level} mb-10 lg:mt-20 mt10 pt-28 mx-auto pb-24 `}>
        <div className='px-4'>
            <h1 className={`${monserat.className} text-center font-bold text-white text-lg lg:text-4xl`} >Ready to Take Your Advertising to the <br /> Next Level?</h1>
            <p className={`${monserat.className} lg:text-lg font-[400] text-center  mt-2 text-sm text-white`}>Contact us today to discuss your goals and objectives.</p>
            <Link href={'advertisements/contact'} className='flex justify-center mt10'><Button className=' bg-orange-400 py-5 px-5 mt-24 '>Contact Us</Button></Link>
        </div>
    </div>
  )
}
