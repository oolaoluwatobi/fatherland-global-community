import React from 'react'
import Image from 'next/image'
// import { Button } from '@/components/ui/button'
import style  from './styles.module.css'
import Rectangle5825 from "@/public/Rectangle 5825.png"

export default function Africans() {

    const AFRICAN = [
        {
          id:"1",
          text:"Proudly Africans",
         content:'Community Hubs are local centers of activities and co-working spaces with media studio facilities strictly for Community Hub   Members in the United States and around the World.',
        
        }
      ]

  return (
    <div className='lg:mt-32 mt-80 mx-12'>
      <div className={`${style.bckg} mb-20  lg:mt-10 mt-5` } >
      {AFRICAN.map((Afro)=>(
      <div className='px-14 lg:py-10 lg:flex flex-rows-' key={Afro.id}>
         <div className=' mx-auto lg:ml-[3rem]'>
             <div className='text-white pt-12 font-bold lg:text-3xl text-xl '>{Afro.text}</div>
             <div  className='text-white lg:mt-7 font-[600] lg:text-xl text-sm lg:w-[27rem] text-cover'>{Afro.content}</div>
          </div>
          <div>
               <Image src={Rectangle5825} alt=""  className=''/>
            </div>
       </div>
      ))}
       
    </div>
    </div>
  )
}
