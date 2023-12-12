import React from 'react'
import Image from 'next/image'
import offerbanner from '@/public/OFFER-BANNER.png.png'

export default function Storebanner() {
  return (
    <div className='mt-14 lg:block hidden'>
    <Image src={offerbanner} alt=""  />
  </div>
  )
}
