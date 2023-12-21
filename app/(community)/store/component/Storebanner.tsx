import React from 'react'
import Image from 'next/image'
import offerbanner from '@/public/OFFER-BANNER.png.png'

export default function Storebanner() {
  return (
    <div className='mt-14 lg:block hidden mx-auto   '>
    <Image src={offerbanner} alt="" className='mx-auto  w-full max-w-[97.813rem]   object-cover' />
  </div>
  )
}
