import React from 'react'
import Shopping from './component/Shopping'
import ShoppingRelated from './component/ShoppingRelated'

export default function page() {
  return (
     <section className='bg-[#feffff]'>
        <Shopping />
        <ShoppingRelated />
     </section>
  )
}
