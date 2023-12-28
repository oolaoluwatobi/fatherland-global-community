import React from 'react'
import Platform from './components/Platform'
import Explore from './components/Explore'
import Choosecategory from './components/Choosecategory'
import Becomeatutor from '../exploreculturallearning/components/Becomeatutor'
import Intrestedinlearning from '../exploreculturallearning/components/Intrestedinlearning'

export default function page() {
  return (
    <div className='bg-white mx-auto'>
        <Platform />
        <Explore />
        <Choosecategory />
        <Becomeatutor/>
        <Intrestedinlearning />
    </div>
  )
}
