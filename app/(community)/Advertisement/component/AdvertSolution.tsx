import React from 'react'
// import React from 'react'
import style from './styles.module.css'
import Image from 'next/image'
import { AdvertSolutions } from '@/lib/data'

export default function AdevertSolution() {
  return (
    <div className={`${style.bggg} mb-10` }>
    <p className='text-white font-bold text-center text-3xl pt-[6.708rem]'>Our Solutions</p>

    <div>
     {AdvertSolutions.map((advert)=>(
         <div className='grid grid-rows-3 bg-white'>
             {/* <Image src={advert.image1!!} alt="" /> */}
             <Image src={advert.image1!!} alt="" />
             <Image src={advert.image2!!} alt="" />
             <Image src={advert.image3!!} alt="" />



         </div>

     ))}
    </div>

 </div>
  )
}
