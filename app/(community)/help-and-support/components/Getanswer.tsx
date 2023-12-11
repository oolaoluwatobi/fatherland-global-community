'use  client'
import React from 'react'
import { Button } from '@/components/ui/button'
import { channels } from '@/lib/data2'
import Link from 'next/link'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa'





export default function Getanswer() {
  return (
    <div className='max-w-[90rem] '>
        <div className='bg-[#14202D] pt-4 lg:pt-[4.375rem] mx-auto text-center lg:text-start lg:pl-[7.688rem] pb-4 lg:pb-[4rem]'>
            <p className='max-w-[40.813rem] text-white text-base lg:text-[40px] font-bold leading-[56px] break-words pb-[3.149rem]'>Get Answers Immediately with Live Chat</p>

            <Button className='bg-primary text-white hover:bg-primary'>Live Chat</Button>
        </div>
        <main className="mx-auto container  lg:pb-[6.07rem] pb-4 mt-4 lg:mt-[11.553rem] max-w-7xl">
            <p className="text-[#14202D] text-base lg:text-4xl font-bold leading-[56px] break-words">Our Communication Channels</p>
            <p className='max-w-[76.375rem] text-sm lg:text-xl  font-normal pb-[2.494rem]'>Our Communication channels include newsletters, email updates,
                 social media platforms, and a dedicated community <br /> website. </p>
        {channels.map((channel, index) => (
          <div key={index} className="lg:grid grid-cols-2 gap-4 ">
            
                    <Link href='' className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><AiFillTwitterCircle className='text-4xl'/>{channel.twitter}</Link>
                    <Link href='' className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><span><FaInstagramSquare className='text-4xl'/></span>{channel.instagram}</Link>
                    <Link href='' className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><FaFacebook className='text-4xl'/>{channel.facebook}</Link>
                    <Link href='' className="flex items-center gap-4 shadow-lg bg-white shadow-blue-50 rounded-[10px] mb-[2.174rem] py-4 lg:py-[2rem] px-[1.835rem]"><FaYoutube className='text-[#fc0002] text-4xl'/> {channel.youtube}</Link>            
          </div>
        ))}
        </main>
    </div>
  )
}
