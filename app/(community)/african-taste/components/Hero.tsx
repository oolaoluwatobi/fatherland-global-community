import React from 'react'
import style from './styles.module.css'
import { AFRICANTASTEBANNER } from '@/lib/data2'



export default function Hero() {
  return (
    <div className={`lg:w-[90rem] mx-auto ${style.ban} lg:h-[35.813rem`}>
        <main className={`${style.hher} lg:h-[35.813rem mx-auto`}>
        {AFRICANTASTEBANNER.map((taste, i) => (
            <div
              key={i}
              className="mxauto containe lg:w-[45.313rem]  lg:ms-[8.063rem] lg:pt-[11.306rem] pb-[12.868rem]"
            >
              <p className='text-[40px] font-bold leading-[56px] break-words text-white mb-[1.023rem]'>{taste.label}</p>
              <p className='lg:w-[42.75rem] text-white text-xl font-normal leading-7 break-words'>{taste.text}</p>
            </div>
            
            
            ))}
        </main>
    </div>
  )
}
