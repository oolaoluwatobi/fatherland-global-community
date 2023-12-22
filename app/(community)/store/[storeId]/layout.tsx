import React from 'react'
import StoreComponent from "./components/StoreComponent"
import StoreComponentRelated from './components/StoreComponentRelated'
// import StoreComponentFomedia from './components/StoreComponentFomedia'

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
    <div className=''>
      <h1></h1>
      <StoreComponent params={params} />
       {/* <StoreComponentFomedia params={params} /> */}
       <StoreComponentRelated />
      {children}
    </div>
  );
}
