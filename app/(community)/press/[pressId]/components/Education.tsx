import React from 'react'
import Image from 'next/image'
import imag4 from "@/public/assets/imag4.png";
import imag5 from "@/public/assets/imag5.png";
import imag6 from "@/public/assets/imag6.png";
import Link from 'next/link';
import { GoClock } from "react-icons/go"

export default function Education() {
    const Education=[
  {
    id:'1',
    text:'NCDF Applies For Listing On Nigerian Exchange',
    image:imag4,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  },
  {
    id:'2',
    text:'About: Nigerian Capital Development Fund',
    image:imag5,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  },
  {
    id:'3',
    text:'NCDF Affordable Housing Initiative',
    image:imag6,
    goto:'READ FULL ARTICLE',
    date:'16 Jun 2023',
  
  }]
    return (
      <div className='mx-auto max-w-[90rem]'>
      
      <div className=' mx-auto container'>
         <div className='mx-auto'>
             <p className=' lg:text-2xl text-xl font-[700] mt-8 lg:mt-28 mx-auto text-center  lg:text-start lg:ps-[0.5rem]'>Education</p>
             <div className='mt-5 mx-auto'>
                 <div className=' lg:w-full grid lg:grid-cols-3 gap-4 lg:max-w-7xl  mx-auto'>
                 {Education.map((educt)=>(
                    <div key={educt.id} className=' bg-white border border-red-200 rounded-[10px]  hover:border-primary  active:border-primary shadow-lg shadow-blue-100 mx-auto w-full lg:w-[23.625rem'>
                      <Image src={educt.image} alt='' className='object-cover mx-auto pt-[1.75rem] pb-[0.563rem] px-3 lg:px-0 lg:w-[21.5rem' ></Image>


                      <div className='font-[650] lg:text-lg text-sm pl-1 mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                        {educt.text}
                      </div>
                      <div  className='lg:flex justifyaround items-center px5 '>
                      <Link href={`/press/${educt.id}`} className='lg:pl-[2.5rem] pl-[0.5rem] lg:text-base text-xs mt-3 mb-3 font-[600] text inline text-amber-500 underline decoration-orange-40'>{educt.goto}</Link>
                      <div className='lg:ml-14 ml-5 lg:text-xs md:font-[00] text-[0.6rem] flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {educt.date}</div>
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
  