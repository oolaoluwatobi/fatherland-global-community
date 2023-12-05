import React from 'react'
import Membership from './components/Membership'
import Table from './components/Table'
import Join from './components/Join'

export default function page() {
  return (
    <div className='bg-[#fcfdff] max-w-[90rem] mx-auto'>
        <Membership />
        <Table />
        <Join />
    </div>
  )
}
