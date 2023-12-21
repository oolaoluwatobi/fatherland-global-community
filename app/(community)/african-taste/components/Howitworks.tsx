'use client'
import React from 'react'
import Image from 'next/image'
import guy from '@/public/Rectangle 5707 (1).png'
import { DividerVerticalIcon } from '@radix-ui/react-icons'
import { FaPeopleGroup } from 'react-icons/fa6'
import { FaCreditCard, FaGlobe,  } from 'react-icons/fa'
// import { BiMapPin } from 'react-icons/bi'
import { FaLocationPin } from "react-icons/fa6";






export default function Howitworks() {
  return (
    <div className='bg-[#e6f5f9] mx-auto lg:mb-[6.75rem] mb-8'>

        <main className='mx-auto max-w-7xl'>
        <section className='' >
            <div className='container'>
                <p className='lg:pt-[2.875rem] pt-4 text-[#1402D] text-center lg:text-start
                 lg:text-[40px] font-bold lg:leading-[50px] lg:pb-[4rem] pb-4 break-words lg:w-[58.313rem] w-full'>
                   How it Works 
                </p>
            </div>

        <div className=' container lg:flex justify-between'>
            <Image src={guy} alt="" className='lg:pb-24'/>


            <div className=' pt-12 lg:pt-0'>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifyevenly items-center bg-white'>
                    <FaPeopleGroup className='lg:mr-[4.813rem] mr-4 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>  Become a Member by Registering</p>

                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div className=''>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifyevenly items-center bg-white'>
                <FaCreditCard className='lg:mr-[4.813rem] mr-8 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Get your membership card</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <div className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex justifyevenly items-center py3 px12  bg-white'>
                    <FaGlobe className='lg:mr-[4.813rem] mr-8 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Explore the website to see offers and partners</div>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex items-center  bg-white'>
                <FaLocationPin className='lg:mr-[4.813rem] mr-8 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Visit the nearest restaurant in your location</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[9.563rem py-[1.9rem] rounded-[7px] flex items-center bg-white'>
                <FaCreditCard className='lg:mr-[4.813rem] mr-8 ml-2 lg:ml-[1.625rem] lg:text-[30px] text-[#0BA1BA]'/>Show them your Fatherland Membership card</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    </div>
                </div>
                <p className='text-black lg:text-xl text-sm font-normal lg:leading-5 break-words px-[4rem] py-[1.9rem] text-center rounded-[7px] flex items-center bg-white'>
                Sit back & Enjoy your Meal!</p>
                <div className='flex lg:justify-between justify-around lg:px-20 px-0 text-[#0BA1BC]'>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                    <div>
                    <span><DividerVerticalIcon /></span>
                    <span><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>  
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    <span className='hidden lg:block'><DividerVerticalIcon /></span>
                    </div>
                </div>
            </div>
        </div>
        </section>


            </main>  
              </div>
  )
}
