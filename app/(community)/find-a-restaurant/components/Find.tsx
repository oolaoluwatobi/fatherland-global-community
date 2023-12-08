'use client'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'


export default function Find() {
  return (
    <div className='max-w-[90rem] mx-auto'>
        <div className='max-w-[90rem] bg-[#2B3449] pt-[6.563rem] lg:px-[6.188rem]'>
            <p className={`text-white font-bold text-[40px] break-words leading-[56px] pb-[1.438rem] mx-auto container`}>Find a Restaurant</p>
            <div className="relative lg:pl[2rem] mx-auto container  pb-[4.438rem]">
              <input type="text" placeholder='Search restaurant name' className=' mb-5 w-full mr-[1.375rem] lg:w-[35.063rem] py-[1.625rem] focus:outline-none bg-[#5c6271] rounded-[8px] text-white text-base font-medium break-words pl-[1.75rem]'/>
              <input type="text" placeholder='Location' className='w-full lg:w-[35.063rem] py-[1.625rem] focus:outline-none bg-[#5c6271] rounded-[8px] text-white text-base font-medium break-words pl-[1.75rem]'/>
            </div>
        </div>
    </div>
  )
}
