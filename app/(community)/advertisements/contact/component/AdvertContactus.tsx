'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
// import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";

const monserat = Montserrat({
  subsets: ["latin"],
});
// const popit = Poppins({
//   subsets: ["latin"],
// });


export default function AdvertContactus() {
  return (
    <div className='max-w-[90rem]'>
              <div className="bg-[#2B3449] mx-auto mb-[3.813rem] lg:px-[2rem]">
        <p className="text-white text-[40px] font-bold leading-[56px] break-words mx-auto container ps-[5rem] py-[6.5rem]">
          Contact Us
        </p>

      </div>

      <section className='max-w-[50rem] mx-auto border-2 border-[#0CA2B9] rounded-2xl bg-white'>
        <p className={`${monserat.className} pt-[2.125rem] mb14 pb-[0.6rem] pl-[2.25rem] text-[#14202Db] text-xl font-[550] leading-5 break-words`}>
        Get In Touch
        </p>
        <p className='pl-[2.25rem] text-[#14202d] text-base font-normal leading-7 break-words pb-[2.875rem]'>
        Whether you want to target engaged audiences, license content or create authority around your brand, contact us via the form below and we’ll be happy to help.
        </p>



        <div className="pl-[2.25rem] lg:flex justify-between pb-[2.688rem] gap-4 mx-auto container">
                <div>
                  <label htmlFor="" className="font-[600]">
                    First Name
                  </label>{" "}
                  <br />
                  <input
                    type="text"
                    className="w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] mb-[2.688rem] lg:mb-0"
                  />
                </div>
                <div>
                  <label htmlFor="" className="font-[600]">
                    Last Name
                  </label>{" "}
                  <br />
                  <input
                    type="password"
                    className=" w-full lg:w-[22rem] h-[65px] bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]"
                  />
                </div>

              </div>

                <main className=' mx-auto container '>
                <label htmlFor="" className='font-[600]'>Location</label> <br/>
                <select name="" id="" className='w-full bg-[#f4f4f4] h-[65px] px-[0.999rem] mb-[2.688rem] rounded-[6px]'>
                    <option value="" className='px-[2rem'></option>
                    <option value="" className='px-[0.999rem'>Nigeria</option>

                </select>

                <label htmlFor="" className="font-[600] text-[#282828]">
                Email 
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />

              <label htmlFor="" className="font-[600] text-[#282828]">
               Confirm Email 
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />

             <label htmlFor="" className="font-[600] text-[#282828]">
                Company
              </label>{" "}
              <br />
              <input
                type="text"
                className="bg-[#f4f4f4] w-full h-[65px] mb-[2.688rem] rounded-[6px]"
              />


                <label htmlFor="" className="font-[600] text-[#282828]">
                Comments
              </label>{" "}
              <br />
              <textarea
                className="bg-[#f4f4f4] w-full rounded-[6px] h-[11rem] py-4 px-4 mb-[4rem]"
              />

              <div className='flex justify-center  mb-[4rem]'>
                  <Button className='bg-orange-400 hover:bg-primary'>
                    Submit
                  </Button>
              </div>
                </main>
      </section>








    </div>
  )
}
