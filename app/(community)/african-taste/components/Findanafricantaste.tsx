'use client'
import React from 'react'
import style from './styles.module.css'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import hey from '@/public/Rectangle 58255.png'
import Link from 'next/link'
import { useRouter } from 'next/navigation'


export default function Findanafricantaste() {
  const router=useRouter()
  return (
    <div className={`mx-auto container ${style.fb} mb-[8rem] max-w-[78.625rem] rounded-[10px] lg:flex justify-around items-center`}>
        <div className='mx-auto container'>
            <p className='text-white text-[44px] font-extrabold leading-[58px] break-words max-w-[41rem] pb-2'>Find an African Taste Restaurant close to you</p>
            <p className='text-white text-base font-normal leading-6 break-words max-w-[32.25rem] mb-[2.813rem]'>With over 50 restaurants on African taste, search for any restaurant around you</p>
           
           <Button className={`text-white font-semibold break-words text-base ${style.fb1} py-[0.688rem] ps-[1.188rem] pe-[1.563rem]`}onClick={()=>router.push('/find-a-restaurant')}>
                Find Now
            </Button>
          
        </div>

        <Image src={hey} alt="" className='pt-[3.813rem] pb-[5.625rem] lg:pr-[4.188rem]'/>


    </div>
  )
}
