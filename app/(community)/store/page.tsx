import React from 'react'
import Store from './component/Store'
import Storecategory from './component/Storecategory'
import Storebanner from './component/Storebanner'
import StoreDiscover from './component/Storediscover'
import StorediscoverCategory from './component/StorediscoverCategory'
import StoreHome from './component/StoreHome'
import StoreDistribution from './component/StoreDistribution'
import Storecard from './component/Storecard'

export default function StorePage () {
  return (
    <section className='mx-auto w-[90rem] mb-10 bg-gray-`100'>
    <Store />
    <Storecategory />
    <Storebanner />
    <StoreDiscover />
    <StorediscoverCategory />
    <StoreHome />
    <StoreDistribution />
    <Storecard />
    </section>
  )
}
