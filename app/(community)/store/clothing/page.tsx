import React from 'react'
import ClothingCategory from './component/ClothingCategory'
import ClothingCard from './component/ClothingCard'
import ClothingButton from './component/ClothingButton'
import ClothingStore from './component/ClothingStore'

export default function StoreclothingPage() {
  return (
   <section className='bg-[#F5F5F5]'>
    <ClothingStore />
    <ClothingCategory />
    <ClothingButton />
    <ClothingCard />
   </section>
  )
}
