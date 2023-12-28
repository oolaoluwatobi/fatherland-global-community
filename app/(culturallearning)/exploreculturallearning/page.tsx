import React from 'react'
import HeroSection from './components/HeroSection'
import Schoolandclassroom from './components/Schoolandclassroom'
import Categories from './components/Categories'
import Eclcampus from './components/Eclcampus'
import TrendingSelectionofcourses from './components/TrendingSelectionofcourses'
import Becomeatutor from './components/Becomeatutor'
import Intrestedinlearning from './components/Intrestedinlearning'
import Faq from './components/Faq'

export default function page() {
  return (
    <div className='mx-auto bg-white'>
        <HeroSection />
        <Schoolandclassroom />
        <Categories />
        <Eclcampus />
        <TrendingSelectionofcourses />
        <Becomeatutor />
        <Intrestedinlearning />
        <Faq />
    </div>
  )
}
