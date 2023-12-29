"use client"
import style from './styles.module.css'
import React, { useState } from 'react'
// import { AiOutlineUp } from "react-icons/ai"
// import { BiChevronUp } from 'react-icons/bi'
import { BsReply } from 'react-icons/bs'
import { FaRegShareSquare } from 'react-icons/fa'
import { HiOutlineArrowCircleRight, HiOutlineChevronUp } from 'react-icons/hi'

const TOPICS = [
  {
    id: "1",
    name: "Black Holes",
    time: "2 days ago",
    replies: 2,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "2",
    name: "The Dendera Light",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "3",
    name: "The Dancing Plaque",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "4",
    name: "The Dendera Light",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "5",
    name: "The Dancing Plaque",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "6",
    name: "The Dendera Light",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "7",
    name: "The Dancing Plaque",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "8",
    name: "The Dendera Light",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
  {
    id: "9",
    name: "The Dancing Plaque",
    time: "2 days ago",
    replies: 3,
    content: "Lorem ipsum dolor sit amet consectetur. Cras a dui amet ut consequat nunc scelerisque iaculis aenean. Aliquam facilisis et at est. Vitae fermentum est pulvinar sit id adipiscing integer pharetra. Metus ut aliquam vel sed at dui lectus sapien accumsan."
  },
]

export default function JoinConversation() {
  const [showContent, setShowContent] = useState<boolean>(true)

  console.log(showContent)

  const renderComments = TOPICS.map(topic => {
    return (
      <div key={topic.id}>
        <div className='mt-8 flex space-x-4'>
          <HiOutlineChevronUp className="my-auto cursor-pointer hover:" onClick={() => setShowContent(!showContent)} />
          <h5 className='text-secondary lg:text-lg font-[500] text-xs  '>{topic.name}</h5>
          <p className='text-muted lg:text-base font-[300] text-xs'>{topic.time}</p>
        </div>
        {
          showContent ? (
            <div  className="px-8 mt-4 ">
              <p className='font-[300] leading-7 text-xs lg:text-base '>{topic.content}</p>
              <p className='underline mt-4 cursor-pointer flex text-xs lg:text-base'>Learn More <HiOutlineArrowCircleRight className="my-auto ml-4" /> </p>
              <div className='flex space-x-5 mt-4'>
                <p className='flex text-xs lg:text-base'><BsReply className="my-auto mr-2" /> {topic.replies} Replies </p>
                <p className='flex text-xs lg:text-base'><FaRegShareSquare className="my-auto mr-2" /> Share</p>
              </div>
            </div>
          ) : null
        }
      </div>
    )
  })
  
  return (
    <div className='max-w-7xl mx-auto container'>
      <div className='lg:mt-[7.625rem] mt-12 mx-auto  ml[6.125rem]'>
        <h4 className='lg:text-3xl text-xl text-[#161915] font-[600]  '>Join Conversation</h4>
        <p className='text-muted text-[#14202d] lg:text-lg text-sm'>Check out the most popular topics</p>
      </div>
      <div className='mt-10 mb-[9.5rem] border-[20px] border-[#26D44B33]  rounded-lg lg:p-12 p-4'>
        <h5 className='text-[#000] font-[600] lg:text-xl text-base'>ALL TOPICS</h5>
        <div className={`overflow-y-scroll lg:h-[43.438rem] h-[30rem] ${style.win1}`}>{renderComments}</div>
      </div>
    </div>
  )
}
