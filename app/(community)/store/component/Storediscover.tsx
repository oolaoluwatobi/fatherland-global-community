import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Storediscovers } from '@/lib/data'

export default function StoreDiscover() {
  return (
    <div className='mt-10 mx-auto lg:w-full max-w-[95.813rem] lg:flex justify-between' >
        <div>
            <p className='lg:w-[20rem] text-3xl  font-bold'>Discover Unique  <span className='text-primary'> Hand-Picked</span>  Items</p>
        </div>
        <div className=' ml-5 mt-7 flex justify gap-[2rem] mr-10 mb-10 text-xl'>
          <Link href='' className='underline decoration-secondary'> Best Offers </Link>
          <Link href=''>Art & Collectibles</Link>
          <Link href=''>Books & Magazines</Link>
          <Link href=''>Crafts & Supplies</Link>
        </div>

      
    </div>
  )
}
