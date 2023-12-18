import React from 'react'
import Image from 'next/image'
import { FEATURE } from '@/lib/data'
export default function Features() {
  return (
     <div>
       <div className='mt-5 font-bold px-20 text-2xl '>Feature Your Adverts on:</div>

       {FEATURE.map((feat, i)=>(
        <div key={i} className='ml-[5rem] mt-5 mb-5 lg:flex justify-between gap-12 max-w7xl overflow-x-auto no-scrollbar'>
         
          
             <Image src={feat.image} alt=''  className=' lg:h[3.063rem lg:w[-1.238 mb-4'/>
             {/* <Image src={feat.image} alt=''  className=' max-h[3.063rem] max-w[1.238] '/> */}
             <Image src={feat.image1} alt=''  className=' lg:w-[83.438 lg:h-[4.688 mb-4'/>
             <Image src={feat.image2} alt=''  className=' mb-4 '/>
             <Image src={feat.image3} alt=''  className=' mb-4 '/>
             <Image src={feat.image4} alt=''  className=' mb-4 '/>
             <Image src={feat.image5} alt=''  className=' mb-4 '/>
             <Image src={feat.image2} alt=''  className=' mb-4 '/>
             <Image src={feat.image3} alt=''  className=' mb-4 '/>
             <Image src={feat.image4} alt=''  className=' mb-4 '/>
             <Image src={feat.image5} alt=''  className=' mb-4 '/>


           
             
            
     
         </div>
       ))}
    </div>
  )
}



 {/* <div>
             <div>{feat.twenty}</div>
             <div>
                 <div>{feat.global}</div>
                 <div>{feat.globcontent}</div>
             </div>    
          </div> */}