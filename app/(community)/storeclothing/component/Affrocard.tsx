import React from 'react'
import style from "./styles.module.css";
import Image from 'next/image';
import imaggg from '@/public/image 53.png'
// import imagggg from '@/public/Ellipse 188.png'
export default function Affrocard() {
  return (
    <div className={`${style.Afrobg} max-w-[70.375rem max-w-7xl h-[27rem] mx-auto mb-5`}>
        <div className='' >
          <p className='text-[#fff] font-[500] pt-[3rem] pl-[13rem] font-sans text-3xl'>Get every Special Offer</p>
          <p className='text-5xl pl-[6.938rem] text-[#fff] font-[600] pt-[1.5rem]'>BIG FASHION SALE</p>
        </div>
        {/* <Image src={imaggg} alt="" className='h[26.5rem] w[34rem] items-center objectcover pb-0'/>
      <div className={`${style.afobg} h-[9.375rem] w-[9.375rem]`}></div> */}
    </div>

  )
}
