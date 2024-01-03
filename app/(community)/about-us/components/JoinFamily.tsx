"use client"

import { Button } from '@/components/ui/button'
import React from 'react'

export default function JoinFamily() {
  return (
    <div className='max-w-7xl mx-auto container'>
      <div className=' join_family text-white lg:space-y-6  lg:my-40 my-12 lg:p-20 py-12 text-center  rounded-lg  '>
        <h4 className='lg:text-5xl font-[700] text-2xl'>Join our Global Family</h4>
        <p className='lg:text-[20px] text-[#14202d] font-normal lg:leading-9 text-sm mb-8 mt-4 lg:mt-0 lg:mb-0'>Our passion lies in leveraging technology to craft transformative experiences<br /> that enhance the lives and communities we serve.</p>
        <Button className='bg-secondary hover:bg-secondary' size="lg">View Job Opportunities</Button>
      </div>
    </div>
  )
}
