import React from 'react'
import Checkout from './component/Checkout'
import CheckoutSearch from './component/CheckoutSearch'

export default function CheckoutPage() {
  return (
    <section className='bg-[#F5F5F5] mb-24 px10'>
        <CheckoutSearch />
        <Checkout />
    </section>
  )
}
