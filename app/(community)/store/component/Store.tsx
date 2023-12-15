import React from 'react'
import style from './styles.module.css'

export default function Store() {
   
  return (
    <div className=''>
       <input
                type="text" placeholder='Search for anything'
                className="bg-white w[90rem] mx-auto h-[6.75rem] max-w-7xl pl5 text-gray-200 text-xl mt-10 rounded-[6px] shadow-xl "/>

       <div className={`${style.storebg} mt-10 pl-[2.188rem] mx-auto max-w-7xl`}>
           <p className='text-bold font-bold lg:text-6xl pt-28'>Handcrafted products <br /> inspired by <span className='text-[#DA5001]'>Africans</span> </p>
           <p className=' pt-5 text-bold font-[500] text-2xl text-gray-500'>Fatherland Store is a destination for unique and creative products.</p>
           
      </div>
    </div>

  )
}
