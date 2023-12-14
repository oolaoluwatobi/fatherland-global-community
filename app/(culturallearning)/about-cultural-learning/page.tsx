import React from 'react'
import Platform from './components/Platform'
import Worldclassonline from './components/Worldclassonline'
import Connect from './components/Connect'
import Breakbarriers from './components/Breakbarriers'
import Becomeatutor from '../exploreculturallearning/components/Becomeatutor'
import Intrestedinlearning from '../exploreculturallearning/components/Intrestedinlearning'

export default function page() {
  return (
    <div className='bg-white max-w-[90rem] mx-auto'>
        <Platform />
        <Worldclassonline />
        <Connect />
        <Breakbarriers />
        <Becomeatutor />
        <Intrestedinlearning />
    </div>
  )
}
