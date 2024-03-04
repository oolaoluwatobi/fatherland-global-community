import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function ClothingButton() {
  return (
    <div className='lg:flex gap-3 lg:ml-96 ml-20 mt-10'>
        <Button className='bg-white text-black hover:bg-gradient-to-r from-cyan-500 to-green-500  '> 1</Button>
        <Button className='bg-white text-black hover:bg-gradient-to-r from-cyan-500 to-green-500  '>2</Button>
        <Button className='bg-white text-black hover:bg-gradient-to-r from-cyan-500 to-green-500  '>3</Button>
        <Button className='bg-white text-black hover:bg-gradient-to-r from-cyan-500 to-green-500  '>Next   
            <ArrowRightIcon />
        </Button>
    </div>
  )
}
