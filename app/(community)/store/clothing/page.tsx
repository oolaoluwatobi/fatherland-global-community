import React from 'react'
import Affrostore from './component/Affrostore'
import Affrocategory from './component/Affrocategory'
import Affrocard from './component/Affrocard'
import Affrobutton from './component/Affrobutton'

export default function StoreclothingPage() {
  return (
   <section className='bg-[#F5F5F5]'>
    <Affrostore />
    <Affrocategory />
    <Affrobutton />
    <Affrocard />
   </section>
  )
}
