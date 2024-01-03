import React from 'react'
import Image from 'next/image'
import Group from "@/public/assets/Group.png";
import Link from 'next/link';
import { GoClock } from "react-icons/go"
// import { link } from 'fs';
import { Entertainment } from '@/lib/data';



export default function Mpress() {

  return (
    <div className='mx-auto max-w-[90rem]'>
        <div className=''>
            <Image 
            src={Group} alt="" width={0} height={0} sizes='100vw' />
        </div>
        <div className=' mx-auto container'>
           <div className='mx-auto '>
               <p className=' lg:text-2xl text-xl font-[700] lg:mt-28 mt-8 mx-auto text-center lg:text-start lg:ps-[0.5rem]'>Entertainment</p>
               <div className='mt-5 mx-auto'>
                   <div className=' lg:w-full grid lg:grid-cols-3 gap-4 lg:max-w-7xl  mx-auto'>
                   {Entertainment.map((enter)=>(
                      <div key={enter.id} className=' bg-white border border-red-200 rounded-[10px]  hover:border-primary  active:border-primary shadow-lg shadow-blue-100 mx-auto w-full lg:w-[23.625rem'>
                        <Image src={enter.image} alt='' className='object-cover mx-auto pt[1.75rem] pb-[0.563rem] px3 lg:px-0 rounded-[ 8px]' ></Image>


                        <div  className='font-[650]  text-start  pl-1 lg:text-lg text-sm mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                          {enter.text}</div>
                        <div  className='lg:flex justifyaround items-center px5 '>
                        <Link href={`/press/${enter.id}`} className='lg:pl-[2.5rem] lg:text-base text-xs  pl-[0.5rem] mt-3 mb-3 ps2 pl6 font-[600] text inline text-amber-500 underline decoration-orange-40'>{enter.goto}</Link>
                        <div className='lg:ml-14 ml-4 lg:text-xs text-[0.6rem] md:font-[00] flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {enter.date}</div>
                        </div>
                        </div>
                      ))}
                   </div>
                  </div>
           </div>

        </div>
    </div>
  )
}
