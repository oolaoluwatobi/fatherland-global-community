import React from 'react'
import Store from './component/Store'
import Storecategory from './component/Storecategory'
import Storebanner from './component/Storebanner'
import Storediscover from './component/Storediscover'

export default function StorePage () {
  return (
    <section className='mx-auto w-[90rem] mb-10 bg-gray-50'>
    <Store />
    <Storecategory />
    <Storebanner />
    <Storediscover />
    </section>
  )
}
