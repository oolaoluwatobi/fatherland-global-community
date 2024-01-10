import React from 'react'
import Shopping from './component/Shopping'
import ShoppingRelated from './component/ShoppingRelated'

export default function page() {
  return (
     <section className='bg-[#F5F5F5 bg-[#F8FAFE] mx-auto  max-w-[97.813rem] w-full'>
        <Shopping />
        <ShoppingRelated />
     </section>
  )
}
