 import React from 'react'
 import Image from 'next/image'
 import imag14 from "@/public/assets/imag14.png";
import imag11 from "@/public/assets/imag11.png";
import imag12 from "@/public/assets/imag12.png";
import Link from 'next/link';
import { GoClock } from "react-icons/go"
export default function Corporate() {
   const Corporatee=[
 {
   id:'1',
   text:'Fatherland Corporation to raise $35m in public offer',
   image:imag14,
   goto:'READ FULL ARTICLE',
   date:'16 Jun 2023',
 
 },
 {
   id:'2',
   text:'Fatherland Corporation Launches $5M Private Placement In US',
   image:imag11,
   goto:'READ FULL ARTICLE',
   date:'16 Jun 2023',
 
 },
 {
   id:'3',
   text:'Group plots $25M affordable housing in Badgry',
   image:imag12,
   goto:'READ FULL ARTICLE',
   date:'16 Jun 2023',
 
 }]
   return (
    <div className='mx-auto max-w-[80rem]'>
      
    <div className=' mx-auto container'>
       <div className='mx-auto '>
           <p className=' lg:text-2xl text-xl font-[700] lg:mt-28 mt-8 mx-auto text-center  lg:text-start lg:ps-[0.5rem]'>Corporate</p>
           <div className='mt-5 mx-auto'>
               <div className=' lg:w-full grid lg:grid-cols-3 gap-4 lg:max-w-7xl  mx-auto'>
               {Corporatee.map((corp)=>(
                  <div key={corp.id} className=' bg-white border border-red-200 rounded-[10px]  hover:border-primary  active:border-primary shadow-lg shadow-blue-100 mx-auto w-full lg:w-[23.625rem'>
                    <Image src={corp.image} alt='' className='object-cover mx-auto pt-[1.75rem] pb-[0.563rem] px-3 lg:px-0 lg:w-[21.5rem' ></Image>


                    <div className='font-[650] lg:text-lg text-sm pl-1 mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                      {corp.text}
                    </div>
                    <div  className='lg:flex justifyaround items-center px5 '>
                    <Link href={`/press/${corp.id}`} className='lg:pl-7 pl-[0.5rem] mt-3 mb-3 ps2 pl6 font-[600] lg:text-base text-xs  text inline text-amber-500 underline decoration-orange-40'>{corp.goto}</Link>
                    <div className='lg:ml-14 ml-5 lg:text-xs text-[0.6rem] md:font-[00]  flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {corp.date}</div>
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