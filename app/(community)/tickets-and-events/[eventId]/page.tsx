'use client'
import { EVENTS } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import DialogPage from "../components/Dialog";

export default function EventPage({ params }: { params: { eventId: string } }) {
  const router=useRouter()
  const renderEvent = EVENTS.find((item) => item.id === params.eventId);
  console.log(renderEvent);
  const renderPreviousEvents = EVENTS.slice(0, 3).map((event) => (
    <div
      
      key={event.id}
      className="upcoming_events_card hover:border hover:border-[#FF8800] active:border cursor-pointer"
    >
      <Image src={event.image} alt={event.name} className="rounded-t-md h-[14.313rem] w-[25.188rem]" />
      <div className="p-4 space-y-4">
        <p className="font-[600] hover:underline">{event.name}</p>
        <div className="flex space-x-4 text-sm">
          <p className="flex">
            <MdCalendarMonth className="my-auto mr-2" /> {event.date2}
          </p>
          <p className="flex">
            <HiOutlineLocationMarker className="my-auto mr-2" />{" "}
            {event.location2}
          </p>
        </div>
      </div>
      <div className="mx-auto ms-4 mb-4 ">
        <button className="mt-auto text-sm px-3  font-medium bg-[#26D44B] text-white p-[0.5rem] border rounded-md" onClick={()=>router.push(`${event.id}`)}>
          <Link href="#">Buy Tickets</Link>
        </button>



      </div>
    </div>
  ));

  return (
    <div className="mx-auto bg-white ">
      <div className="lg:flex items-center gap-[3.25rem] lg:mt-[7rem] mt-12 lg:mb-[6.375rem] max-w-7xl mx-auto container mb-4 bg-red500">
        <div className="">
          <Image
            src={renderEvent?.image!!}
            alt="background image"
            className=" aspect-auto bg-red-40 rounded-md object-cover lg:w-[625px] lg:h-[492px]"
          />
        </div>
        <div className="lg:h-[492px] mt-4 lg:mt-0">
          <h2 className="lg:text-4xl text-xl text-center lg:text-start font-[600] text-[#282828] lg:w-[35.875rem] lg:h-[102px]">
            {renderEvent?.name}
          </h2>
          <div className="lg:mt-[1.375rem] mt-4">
            <p className="flex text-[#282828] font-normal lg:text-sm text-xs lg:mb-[1.313rem]">
              <MdCalendarMonth className="my-auto mr-2" />
              {renderEvent?.date}
            </p>{" "}
            <br />
            <p className="flex text-[#282828] font-normal lg:text-sm text-xs lg:mb-[2rem] mb-4">
              <HiOutlineLocationMarker className="my-auto mr-2" />
              {renderEvent?.location}
            </p>
          </div>
          <div className="lg:mb-[45px] mb-4">
            <p className="lg:text-[20px] text-sm font-normal lg:leading-[29px] break-words lg:w-[35.875rem] lg:h-[116px] ">
              {renderEvent?.text}
            </p>
          </div>
          <div className="bg-[#ececec] lg:py-[19px] lg:w-[35.813rem] flex justify-between items-center px-4 rounded-[7px]">
            <div
              className={`text-[#14202D] leading-7 lg:text-sm text-xs font-normal py1`}
            >
              Tickets <br />{" "}
              <span className="lg:text-[32px] text-xl text-[#14202D] font-semibold leading-7">
                {renderEvent?.price}
              </span>
            </div>
            <div className="">
              {/* <button className="mt-auto text-sm px-3  font-medium bg-[#26D44B] text-white p-[0.5rem] border rounded-md" onClick={()=>router.push('/book-a-ticket')}>
                Buy Tickets
              </button> */}


<DialogPage />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-3 md:mx-auto max-w-7xl container lg:mb-[8.938rem] mb-12">
        <p className="mb-4 lg:text-2xl text-lg	leading-7 font-medium text-[#14202D]">
          Tags
        </p>
        <div className="mx-auto lg:flex flex-wrap gap-4 grid grid-cols-2">
          {renderEvent?.tags.map((tag, i) => (
            <Link
              href={tag.href}
              key={i}
              className="text-[#FD6906] px-4 bg-[#fff0de] text-center lg:py-[1rem] py-1 rounded-full font-normal lg:text-xl text-xs lg:leading-7 text-wrap"
            >
              {tag.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl container">
        <h5
          className={`lg:text-[2.5rem] text-xl font-extrabold leading-[3.625rem] lg:pb-[2.813rem] text-[#14202D] max-w-[77.625rem]`}
        >
          Similar Events
        </h5>
        <div className="grid md:grid-cols-3 gap-x-6 gap-y-12 max-w-7xl bg-gray600 lg:mb-[10.813rem] mb-12">
          {renderPreviousEvents}
        </div>
      </div>
    </div>
  );
}
