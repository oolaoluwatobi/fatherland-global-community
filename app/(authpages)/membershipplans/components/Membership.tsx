'use client'
import React from 'react'
import styles from './styles.module.css'
import { DotFilledIcon} from '@radix-ui/react-icons'



export default function Membership() {
  return (
    <div className='px-2 lg:px-0 container lg:mb-[6.438rem] mb-12 lg:pt-[8.938rem] pt-12 mx-auto'>

    <div className='bg-red300 mx-auto lg:mb-[3.813rem] mb-8 container'>
        <p className='text-[#14202D] lg:text-5xl text-2xl font-bold lg:leading-[56px] break-words text-center lg:pb-[1.313rem] pb-4'>Membership Plans</p>
        <p className='text-[#14202D] lg:text-xl text-base font-normal leading-7 break-words text-center'>Select the membership plan that suits your community best</p>
    </div>
    
    <div className='flex justify-center container '>
    <select name="" id="" className='max-w-[718px] rounded-[6px] lg:px-8 px-2 lg:h-[4.063rem] h-12 bg-[#D9D9D947] text-[#282828] text-base font-medium break-words w-full outline-0 mx-auto'>
    <option value="" className=''>country</option>
    <option value="" className=''>1</option>
    <option value="" className=''>2</option>
    <option value="" className=''>3</option>
    <option value="" className=''>4</option>
    </select>
    </div>

<main className='flex justify-center max-w4xl items-center lg:ml-12'>
    
<section className='grid md:grid-cols-2 mx-auto w-full max-w-4xl container'>
    <div className={`w-full lg:w-[23.5rem] border-8 rounded-tr-[6px] rounded-lr-[6px] bg-white lg:mt-[4.563rem] mt-12
    ${styles.b1} border-b-0 border-l0 border-r0`}>

        <div className={`mx-auto px-8`}>
            <p className='text-[#333333] lg:text-2xl text-base font-bold break-words lg:pb-[2.625rem] pb-4 pt-[1.438rem]'>Basic</p>
            <p className='text-[#3AC840] lg:text-xl text-sm font-bold break-words'>Free</p>
        </div>
        <div className="container mx-auto py-4">
        <hr className="border-t border-gray-300"/>
        </div>

        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center mb-[8px]'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] lg:text-sm text-xs font-normal leading-5 break-words'>Reconnect to your African Roots and Heritage.</p>
        </div>
        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] lg:text-sm text-xs font-normal leading-5 break-words'>Access Regular Networking and Community Events.</p>
        </div>

        <div className='flex justify-center mb-[2.5rem]'>
        <button className='text-[#28D744] rounded-[5px] text-base font-semibold break-words border lg:py-[11px] py-2 px-2 lg:px-[12px] lg:mt-[4.125rem] mt-8 border-[#28D744]'>Join Now</button>
        </div>

    </div>


<div className={`w-full lg:w-[23.5rem] border-8 rounded-tr-[6px] rounded-lr-[6px] bg-white lg:mt-[4.563rem] mt-12 ${styles.b2} border-b-0 border-l0 border-r0`}>

<div className={`mx-auto px-8`}>
            <p className='text-[#333333] lg:text-2xl text-base font-bold break-words lg:pb-[1rem] pb-4 pt-[1.438rem]'>Premium</p>
            <div className='lg:textxl textsm fontbold break-words flex gap-[5px]'>
                <p className='flex gap-[0.938rem]'>
                    <span>
                        <span className='text-[#333333AB] text-sm font-normal leading-5 break-words'>Monthly fee</span> <br />
                        <span className='text-[#3AC840] lg:text-2xl font-normal'>$14<sup>.99</sup></span>
                    </span>
                    <span>
                        <span className='text-[#333333AB] text-sm font-normal leading-5 break-words'>Annual fee</span> <br />
                        <span className='text-[#14202D] lg:text-2xl font-normal'>$139</span>
                    </span>
                </p>
                <p className='bg-[#32CF2A21] self-end rounded-[22px] max-w-[77px] max-h-[22px] py-[3px] lg:px-[11px] px-2 text-[#2FE335] text-[0.4rem] lg:text-xs font-normal lg:leading-4 break-words'>Save 10%</p>
                </div>
        </div>
        <div className="container mx-auto py-4">
        <hr className="border-t border-gray-300"/>
        </div>

        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center mb-[8px]'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] lg:text-sm text-xs font-normal leading-5 break-words'>Access all Basic benefits.
</p>
        </div>
        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] lg:text-sm text-xs font-normal leading-5 break-words'>Enjoy Great Discounts Offer on Spiritual and Cultural Tours.</p>
        </div>
        <div className='flex itemscenter mx-auto ps-7 lg:ps-0lg:justify-center'>
            <DotFilledIcon className='text-[#FF8800]'/>
            <p className='text-[#333333] lg:text-sm text-xs font-normal leading-5 break-words'>Get One-on-One Live Coaching on Traditions and Spirituality</p>
        </div>

        <div className='flex justify-center mb-[2.5rem]'>
        <button className='text-[#28D744] text-base rounded-[5px] font-semibold break-words border lg:py-[11px] py-2 px-2 lg:px-[12px] lg:mt-[1.188rem] mt-8 border-[#28D744]'>Join Now</button>
        </div>

    </div>
    </section>
</main>
</div>
  )
}
