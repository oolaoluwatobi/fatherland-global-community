import React from 'react'
import Link from 'next/link'
import style from './styles.module.css'
import Image from 'next/image'
import { AdvertSolutions } from '@/lib/data'
import { Advertsolution2 } from '@/lib/data'
import { Button } from '@/components/ui/button'

export default function AdevertSolution() {
  return (
    <div className={`${style.bggg} mb-10` }>
    <p className='text-white font-bold text-center text-2xl pt-[5rem]'>Our Solutions</p>

    <div>
     {AdvertSolutions.map((advert,i)=>(
         <div key={i} className='flex max-w-[47rem] justify-around  mx-auto pt-5 pb-10' >
            
           <div className=' bg-white  pt-6 border-[7px] border-primary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] py-14 px-12 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'><Image src={advert.image1!!} alt="" className='mx-auto' /><p className='text-sm mt-5'> Branded Content</p></div> 

             <div className=' bg-white pt-6 border-[7px] border-secondary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] ontainer px-20 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'><Image src={advert.image2!!} alt=""  className='mx-auto' /> <p className='text-sm mt-5'> Insights</p></div>

           <div className=' bg-white pt-6 border-[7px] border-primary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] ontainer px-14 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'>  <Image src={advert.image3!!} alt="" /><p className='text-sm mt-5'>Distribution</p></div>



         </div>

     ))}
    </div>

    <div>
      {Advertsolution2.map((advertt,i)=>(
               <div key={i} className='flex max-w-[47rem] justify-around  mx-auto pb-10' >
            
               <div className=' bg-white  pt-6 border-[7px] border-secondary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] py-14 px-20 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'><Image src={advertt.image!!} alt="" className='mx-auto' /><p className='text-sm mt-5'> Trainings</p></div> 
    
                 <div className=' bg-white pt-6 border-[7px] border-primary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] ontainer px-8 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'><Image src={advertt.image2!!} alt=""  className='mx-auto' /> <p className='text-sm mt-5'> Accelerator Programs</p></div>
    
               <div className='ml bg-white pt-6 border-[7px] border-secondary  border-t-0 border-b-0 border-r-0 rounded-t-[10px] rounded-b-[10px] lg:h-[8rem] ontainer px-12 rounded-[10px] font-[700] hover:border-primary active:border-primary shadow-lg shadow-blue-0  h-auto w-auto'>  <Image src={advertt.image3!!} alt="" /><p className='text-sm mt-5'>Creative Studio</p></div>
    
    
    
             </div>
      ))}
    </div>
    <Link href={`advertlink`} className='flex justify-center'><Button className='py-5 px-5 mt-3 '>Find Out More</Button></Link>

 </div>
  )
}
