import React from 'react'
import Image from 'next/image'
import { Advertcreative } from '@/lib/data'

export default function AdvertCreative(){
  return (
    
    <div className="mx-auto  bg-red-40  mt-20 lg max-w-6xl ">
     {Advertcreative.map((advertt, i)=>(
           <div key={i} className="mx-auto grid grid-cols-3 gap-10 mb-5 containe bg-red-00  justify-around">
    
           <div className=" justify-center flex flex-col border rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-100  h-auto w-auto  text-center ">
               <Image src={advertt.image} alt="" className='max-w-[430px]' />
                 </div>
       
             <div className=" col-span-2 p-4  mx-auto pr-4 bg-[#E8F7FD] ">
               <p className="mt-3 font-bold text-4xl  ">
                 {advertt.heading}
               </p>
               <p className="text-xl max-w-[34rem] my-3 ">
                 {advertt.content}
               </p>
             </div>
           </div>
     ))}
  </div>
  )
}
