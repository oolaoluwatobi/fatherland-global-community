// import Container from '@/components/ui/container'
import React from 'react'
// import tickets_bg from '@/public/assets/tickets-and-events/tickets-bg.png'
// import Image from 'next/image'
import GrabTickets from './components/GrabTickets'
import BrowseCategories from './components/BrowseCategories'
import UpcomingEvents from './components/UpcomingEvents'
import Register from './components/Register'

export default function page() {
  return (
    <main className='max-w-[90rem] mx-auto'>
      <GrabTickets />
      <BrowseCategories />
      <UpcomingEvents />
      <Register />
    </main>
  )
}
 