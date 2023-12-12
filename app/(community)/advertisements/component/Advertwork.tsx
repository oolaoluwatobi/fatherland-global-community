import React from 'react'
// import { Image } from 'next/image'
import { AdvertWork } from '@/lib/data'
import Image from 'next/image'
export default function Advertwork() {
  return (
    <div className='bg-orange-100 px-10 py-2 mt-10 mb-14' >
      <div className='text-2xl text-center font-bold mt-5'>Our Work</div>
        <div className=' w-full grid lg:grid-cols-3 gap-4 max-w7xl  mx-auto  mb-20'>
          {AdvertWork.map((work , i)=>(
              <div key={work.id} className={ `mt-5 bg-white border mx-auto wfull lg:w[23.625rem rounded-[10px] hover:border-primary active:border-primary shadow-lg shadow-blue-50`}>
                   <Image src={work.image} alt='' className='mb-7 ' ></Image>
                  <div className={`text-[#26499D] ml-5 bg-[#dce0e6]  mb-4 inline text-sm px-5 py-2 font-[550] rounded-full`}>{work.text}</div>
                   <div className=' text-2xl font-[700] mt-4 mx-auto text-center ml-3 lg:text-start lg:ps-[0.5rem]'>{work.text1}</div>
                   <div className='lg:pl[2.5rem] pl[0.5rem] mt-3 font-[300] mb-5 ps2 ml-5 text-sm pl6'>{work.location}</div>
         
               </div>
          ))}
          </div>
    </div>
  )
}
