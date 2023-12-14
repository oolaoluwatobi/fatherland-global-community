'use client'
import Image from 'next/image'
import React from 'react'
import img from '@/public/Rectangle 243.png'


export default function Worldclassonline() {
  return (
    <main className='mx-auto max-w-[90rem] lg:px-[7rem] container'>
    <div className=' max-w7xl mx-auto bg-[#d4f6db] border border-[#da5001] rounded-[25px] container lg:mb-[8.938rem] mb-5'>
        <main className='lg:py-8 pt-4 lg:flex justify-around items-center'>
            <Image src={img} alt=""  className='lg:mb-0 mb-5'/>
            <div className='lg:pl-[2rem]'>
                <p className='text-black lg:text-[40px] text-xl font-bold lg:leading-[65px] break-words mb-[1.5rem] text-center lg:text-start'>
                World class online learning experience</p>
                <p className='text-[#55525D] text-xs lg:text-[15px] font-normal leading-6 break-words mb-[1.438rem] text-center lg:text-start'>
                Explore Cultural Learning Class is the streaming platform that makes it possible for anyone to watch or listen 
                to hundreds of video lessons taught by erudite tutors on African cultures and values for Africans.
                 And it cut across Food & Africa Delicacies, Design & Style & Fashion, Arts & Entertainment, Music, Business, 
                Community & Government, Writing & Africa Proverbs & Poems, Home & Lifestyle and Wellness and more. </p>
                <p  className='text-[#55525D] text-xs lg:text-sm font-normal leading-6 break-words mb-[4.188rem] text-center lg:text-start'>
                Explore Cultural Learning Class delivers a world class online learning experience. Video lessons are available at anytime, 
                anywhere on your smartphone, personal computer, YouTube and Fore-TV Hub streaming media players.</p>

            </div>
        </main>

    </div>
    </main>

  )
}
