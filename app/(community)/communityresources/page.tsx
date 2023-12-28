import React from 'react'
import Community from './component/Community'
import Casestudy from './component/Casestudy'
import Bloog from './component/Bloog'
import Media from './component/Media'
import Event from './component/Event'
// import Chubs from './component/Chubs'
import Africans from './component/Africans'
import Communityhub from './component/Cummunityhubs'


export default function CommunityPage() {
  return (
    <div className=' w-full max-w-[97.813rem]  bg-white mx-auto'>
      <Community />
      <Casestudy />
      <Bloog />
      <Media />
      <Event />
      <Communityhub /> 
      <Africans />     
    </div>
  )
}
