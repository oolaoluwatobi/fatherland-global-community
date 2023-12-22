import React from 'react'
import Store from './component/Store'
import Storecategory from './component/Storecategory'
import Storebanner from './component/Storebanner'
import StoreDiscover from './component/Storediscover'
import StorediscoverCategory from './component/StorediscoverCategory'
import StoreHome from './component/StoreHome'
import StoreDistribution from './component/StoreDistribution'
import Storecard from './component/Storecard'

export default function StorePage ({ params }: { params: { storeId: string } }) {
  
  
  return (
    <section className=' max-w[90rem] mb-10 bg-[#EFF4FA]'>
    <Store />
    <Storecategory />
    <Storebanner />
    <StoreDiscover />
    <StorediscoverCategory />
    <StoreHome params={params} />
    <StoreDistribution />
    <Storecard />
    </section>
  )
}
