
import React from 'react'
import HeroSetion from './components/HeroSetion'
import Frequentlyaskedqustn from './components/Frequentlyaskedqustn'
import Getanswer from './components/Getanswer'

export default function page() {
  return (
    <div className=' bg-[#fcfdff] mx-auto'>
        <HeroSetion />
        <Frequentlyaskedqustn />
        <Getanswer />
    </div>
  )
}
