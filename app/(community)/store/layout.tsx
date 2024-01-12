import React from 'react'
// import StoreComponent from "./components/StoreComponent"
// import StoreComponentRelated from './components/StoreComponentRelated'

export default function StoreLayout({
  children, 
  params
}: {
  children: React.ReactNode
  params: {
    storeId: string
  }
}) {
  return (
    // const {}
    
    <div className=' bg-[#F5F5F5]'>
      {children}
    </div>
  );
}
