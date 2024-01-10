import React from 'react'
// import { Image } from 'next/image'
import { AdvertWork } from '@/lib/data'
import Image from 'next/image'
export default function Advertwork() {
  return (
    <div className='bg-orange-100 px-10 py-2 mt-10 mb-14 ' >
      <div className='lg:text-2xl text-xl text-center font-bold mt-5'>Our Work</div>
        <div className=' w-full grid lg:grid-cols-3 gap-4 mx-auto  mb-20'>
          {AdvertWork.map((work , i)=>(
              <div key={work.id} className={ `mt-5 bg-white border mx-auto wfull lg:w[23.625rem rounded-[10px] hover:border-primary active:border-primary shadow-lg shadow-blue-50`}>
                   <Image src={work.image} alt='' className='mb-7 ' ></Image>
                  <div className={`text-[#26499D] lg:ml-5 ml-6 bg-[#dce0e6] mb-4 inline text-sm px-5 mx-5 py-2 font-[550] rounded-full`}>{work.text}</div>
                   <div className=' lg:text-2xl text-lg font-[700] mt-4 mx-auto  text-center lg:ml-3 lg:text-start ps-0 lg:ps-[0.5rem]'>{work.text1}</div>
                   <div className='lg:pl[2.5rem] pl[0.5rem] mt-3 font-[300] mb-5 ps2 lg:ml-5 ml-7 text-sm pl6'>{work.location}</div>
         
               </div>
          ))}
          </div>
    </div>
  )
}
