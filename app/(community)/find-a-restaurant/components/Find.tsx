'use client'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import React from 'react'


export default function Find() {
  return (
    <div className='max-w-[90rem] mx-auto'>
        <div className='max-w-[90rem] bg-[#2B3449] pt-[6.563rem] lg:px-[6.188rem]'>
            <p className={`text-white font-bold text-[40px] break-words leading-[56px] pb-[1.438rem] mx-auto container`}>Find a Restaurant</p>
            <div className="relative ">
      <input
        type="text"
        value=''
        className="py-2 px-4 border border-gray300 rounded-lg focus:outline-none focus:border-blue-500 pl-10 lg:w-[35.063rem] bg-[#5c6271]"
        placeholder="Search..."
      />
      <MagnifyingGlassIcon className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 left-3 lg:left-[31.188rem] text-gray-400"/>
    </div>
        </div>
    </div>
  )
}
