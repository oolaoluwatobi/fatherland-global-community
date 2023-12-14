import { StorehotDeal } from '@/lib/data'
import {  HamburgerMenuIcon } from '@radix-ui/react-icons'
import React from 'react'
import { BiPalette } from 'react-icons/bi'
import { MdCardGiftcard, MdLocalMall, MdLocalMovies, MdLocalOffer, MdMenuBook, MdQueueMusic } from 'react-icons/md'
import Image from 'next/image'
// import offerbanner from '@/public/OFFER-BANNER.png.png'

export default function Storecategory() {
  return (
    <div className='flex mx-auto w-[90rem] '> 
          <div className=' ml-[3rem] h-[33.063rem] w-[21.063rem] pl-[1.125rem] shadow-lg mt-10 hover:border-primary' >
             <div className='flex gap-2  pt-4 h-14 border-b-2 ml[1.125rem]'>
                  <HamburgerMenuIcon className='pt-1 font-bold h-[1.5rem] w-[1.5rem]' /> 
                  <h1 className="text-xl ml-3 font-bold text-gray-800">Categories</h1>
                </div>
                 
                 <div className='border-t-1'></div>
      
                <div className='flex gap-3 mt-[1.875rem] ml[1.125rem]'>
                  < MdMenuBook  className='pt-1 font-bold h-[1.5rem] w-[1.5rem]' />
                 <p className='font-[600] text-[#14202D]'>Books & Magazines</p>
                </div>

                <div className='flex gap-3 mt-[1.875rem]'>
                  <BiPalette className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Crafts & Supplies </p>
                </div>

                <div className='flex gap-3 mt-[1.875rem]'>
                  <MdQueueMusic className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Music & Entertainment </p>
                </div>
    
                <div className='flex gap-3 mt-[1.875rem]'>
                  <BiPalette className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Art & Collectibles </p>
                </div>
          
                <div className='flex gap-3 mt-[1.875rem]'>
                  <MdLocalMall className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Jewelry Bags & Accessories</p>
                </div>

                <div className='flex gap-3 mt-[1.875rem]'>
                  <MdLocalOffer className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Clothing</p>
                </div>

                <div className='flex gap-3 mt-[1.875rem]'>
                  <MdLocalMovies className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Vintage</p>
                </div>

                <div className='flex gap-3 mt-[1.875rem]'>
                  <MdCardGiftcard className='pt-1 font-bold h-[1.5rem] w-[1.5rem]'/>
                 <p className='font-[600] text-[#14202D]'> Popular Gifts & Toy</p>
                </div>
          </div>
        <main>
          <div className=' pt-6 flex lg:flx w-[55.857rem]  gap-[40rem] justifyaround h-20 shadow-xl mt-5 mb-5'>
            <h1 className='ml-14 text-2xl font-bold'>Hot Deals</h1>
            <p className='ml-2 text-lg text-gray-600'>see all</p>
          </div>
          <div className='lg:grid grid-cols-3 gap-4 w-[55.875rem] mxauto cursor-pointer hover:border-secondary active:border active:border-primary  '>
            {StorehotDeal.map((store ,i)=>(
                <div key={i} className=' shadow pb-7  ml-5  '>
                   <Image src={store.image!!} alt="" className='w-full'/>
                    <div className='ml-4'>
                        <p className='font-[500] text-lg w-[18rem] pt-4'>{store.content}</p>
                        <p className='text-gray-400  lg:text-lg pt-1'>{store.content1}</p>
                        <p className='pt-1'>{store.content2}</p>
                       <div className='lg:flex gap-2'>
                           <p className=''>{store.price}</p>
                            <p className='text-orange-400'>{store.price1}</p>
                        </div>
                     </div>
                 </div>
             ))}
          </div>
        </main>

       
      </div>
      
  )
}
