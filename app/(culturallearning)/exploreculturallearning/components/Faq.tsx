'use client'
import React from 'react'
import { FAQ } from '@/lib/data2'
import { useState } from 'react';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function Faq() {
    const [isBlockDisplayed, setIsBlockDisplayed] = useState<boolean[]>(
        Array(8).fill(false)
      );
    
      const toggleDisplay = (index: number) => {
        const updatedDisplay = [...isBlockDisplayed];
        updatedDisplay[index] = !updatedDisplay[index];
        setIsBlockDisplayed(updatedDisplay);
      };
  return (
    <div className="bg-red500 max-w-7xl mx-auto">
    <p className="mx-auto container text-[#14202D] text-base lg:text-4xl font-bold leading-[56px] break-words lg:pt[6.482rem] lg:mb-[3.134rem] text-center lg:text-start">
      Frequently Asked Questions
    </p>
    <main className="mx-auto container lg:grid grid-cols-2 gap-4 lg:pb-[6.651rem]">
      {FAQ.map((list, index) => (
        <div key={index} className="">
          <div>
            <p
              className="flex justify-between items-center gap-4 relative border  py-4 lg:py-[2.138rem] px-[1.835rem] shadow-lg bg-white
               shadow-blue-50 rounded-[10px] mb-[2.174rem]"
              onClick={() => toggleDisplay(index)}
            >
              {list.label}
              <span>
                <ChevronDownIcon />
              </span>
            </p>
            <p
              className={`mt-4 ${
                isBlockDisplayed[index] ? "block" : "hidden"
              } pb-4`}
            >
              {list.answer}
            </p>
          </div>
        </div>
      ))}
    </main>
    </div>
    
  )
}
