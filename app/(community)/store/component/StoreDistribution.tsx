import React from 'react'
import Image from 'next/image'
import { storeDistribution } from '@/lib/data'
export default function StoreDistribution() {
  return (
    <div className=' lg:w-full max-w-[90rem] container mx-auto '>
        <h1 className="font-bold lg:text-3xl text-xl mx-auto ml-10 mt-10 text-[#232323]">Community Distribution <span className='text-primary'>Network Partners</span> </h1>
     <div className='lg:flex mt-5 mb-20'>
        {storeDistribution.map((distribute)=>(
            <div key={distribute.id} className='' >
            <Image src={distribute.image} alt="" className='lg:w-[28rem] w-[20rem] h-[20rem] lg:h-[25rem]' />
            </div>
        ))}
     </div>
    </div>
  )
}
