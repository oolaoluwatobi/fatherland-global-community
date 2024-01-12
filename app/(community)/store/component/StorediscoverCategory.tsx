import React from 'react'
import { Storediscovers } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '../clothing/component/ProductCard'


export default function StorediscoverCategory() {
  return (
      <div  className='lg:grid grid-cols-4 mt-5 gap-6 container lg:w-full max-w-[95.813rem]  mx-auto shadow-xl shadow-blue-50 pb'>
          {Storediscovers.map((discoverStore, i)=>(
            <Link href={`/store/${discoverStore.id}`} className='shadow-lg ' key={i}>
              <ProductCard {...discoverStore}/>
                {/* <Image src={discoverStore.image} alt=""className='w-full mt-4 bg-' />
               <div className='p-5 mt-4'>
                   <p className='font-[800] text-lg'>{discoverStore.title}</p>
                   <p className='font-normal text-[#686868] pt-2'>{discoverStore.description}</p>
                   
                   <div className='lg:flex justify-between'>
                      <p className='text-[#050A1E] font-[800] mb-5 pt-4 '>{discoverStore.price }
                       <Image src={discoverStore.image1} alt="" className='pt-3 font-bold' /> </p>
                      <div><Image src={discoverStore.image2} alt="" className='' /></div> 
                    </div> 
                </div> */}
            </Link>
          ))}
      </div>
  )
}
