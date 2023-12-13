import React from 'react'
import Platform from './components/Platform'
import Worldclassonline from './components/Worldclassonline'

export default function page() {
  return (
    <div className='bg-white max-w-[90rem] mx-auto'>
        <Platform />
        <Worldclassonline />
    </div>
  )
}
