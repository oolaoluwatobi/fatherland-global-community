import React from 'react'

export default function HeroSetion() {
  return (
    <div className='max-w-[90rem] bg-[#14202D] pt-10 lg:pt-[6.576rem] mx-auto  lg:pl-[6.625rem] container pb-10 lg:pb-[9.75rem]'>
        <p className='text-white text-xl lg:text-[40px] font-bold leading-[56px] break-words containe mb-[1.088rem] text-center lg:text-start'>Help & Support</p>
        <p className='text-white lg:text-xl font-normal leading-7 break-words mb-[1.466rem] containe text-center lg:text-start'>Get quick answers to your profound questions</p>

        <input type="text" placeholder='Search' className='mx-auto py-[1.75rem] pl-[1.75rem] rounded-[16px] text-white bg-[#4b545d] lg:w-[50rem] container'/>
    </div>
  )
}
