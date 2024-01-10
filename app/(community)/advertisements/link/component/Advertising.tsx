import React from 'react'
import style from './styles.module.css'
import { ADVERTISE } from '@/lib/data'

export default function Advertising() {
  return (
    
        <div className={`${style.bckg}`}>
            {ADVERTISE.map((advert)=>(
              <div key={advert.id}>
                {/* <div className=''>{advert.id}</div> */}
                <div className='text-white lg:text-2xl text-lg  font-bold lg:px-28 px-10 pt-28'>{advert.text}</div>
                <div className='text-white lg:px-28 px-10 lg:w-[52rem font-[500] mt-5'>{advert.text1}</div>
                
            </div>
               
              
            ))}
         </div>
    
  )
}
