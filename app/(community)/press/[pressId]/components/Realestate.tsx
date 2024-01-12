import React from 'react'
import Image from 'next/image'
import imag7 from "@/public/assets/imag7.png";
import imag8 from "@/public/assets/imag8.png";
import imag9 from "@/public/assets/imag9.png";
import Link from 'next/link';
import { GoClock } from "react-icons/go"


export default function Realestate() {
  const Estate=[
{
  id:'1',
  text:'Group plots $25m affordable housing in Badagry',
  image:imag7,
  goto:'READ FULL ARTICLE',
  date:'16 Jun 2023',

},
{
  id:'2',
  text:'Fatherland floats 500 housing units in Badagry',
  image:imag8,
  goto:'READ FULL ARTICLE',
  date:'16 Jun 2023',

},
{
  id:'3',
  text:'NCDF applies for listing on Nigeria Exchange Limited',
  image:imag9,
  goto:'READ FULL ARTICLE',
  date:'16 Jun 2023',

}]
  return (
    <div className='mx-auto max-w-[80rem]'>
      
    <div className=' mx-auto container'>
       <div className='mx-auto containe'>
           <p className=' lg:text-2xl text-xl font-[700] lg:mt-28 mt-8 mx-auto text-center  lg:text-start lg:ps-[0.5rem]'>Real Estate</p>
           <div className='mt-5 mx-auto'>
               <div className=' lg:w-full grid lg:grid-cols-3 gap-4 lg:max-w-7xl  mx-auto'>
              {Estate.map((real)=>(
                  <div key={real.id} className=' bg-white border border-red-200 rounded-[10px]   hover:border-primary  active:border-primary shadow-lg shadow-blue-100 mx-auto w-full lg:w-[23.625rem'>
                    <Image src={real.image} alt='' className='object-cover mx-auto pt-[1.75rem] pb-[0.563rem] px-3 lg:px-0 ' ></Image>


                    <div className='font-[650] text-start lg:text-lg text-sm pl-1  mx-auto lg:w-[21.375rem] lg:h-[60px]'>
                      {real.text}
                    </div>
                    <div  className='lg:flex justifyaround items-center px5 '>
                    <Link href={`/press/${real.id}`} className='lg:pl-7 pl-[0.5rem] lg:text-base text-xs  mt-3 mb-3 ps2 pl6 font-[600] text inline text-amber-500 underline decoration-orange-40'>{real.goto}</Link>
                    <div className='lg:ml-14 ml-5 lg:text-xs text-[0.6rem] md:font-[00] flex flex-row mt-4 items-center pb-3'><span className='pr-1'><GoClock/></span> {real.date}</div>
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
