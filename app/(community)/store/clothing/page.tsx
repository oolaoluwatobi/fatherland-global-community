import React from 'react'
import Affrostore from './component/Affrostore'
import Affrocategory from './component/Affrocategory'
import Affrocard from './component/Affrocard'
import Affrobutton from './component/Affrobutton'

export default function StoreclothingPage() {
  return (
   <section>
    <Affrostore />
    <Affrocategory />
    <Affrobutton />
    <Affrocard />
   </section>
  )
}
