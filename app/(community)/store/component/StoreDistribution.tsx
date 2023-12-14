import React from 'react'
import Image from 'next/image'
import { storeDistribution } from '@/lib/data'
export default function StoreDistribution() {
  return (
    <div>
        <h1 className="font-bold text-3xl mx-auto ml-10 mt-10 text-[#232323]">Community Distribution <span className='text-primary'>Network Partners</span> </h1>
     <div className='flex mt-5 mb-20'>
        {storeDistribution.map((distribute)=>(
            <div key={distribute.id} className='' >
            <Image src={distribute.image} alt="" className='w-[28rem] h-[25rem]' />
            </div>
        ))}
     </div>
    </div>
  )
}
