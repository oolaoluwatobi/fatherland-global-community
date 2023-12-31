"use client";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { EVENTS } from "@/lib/data";
import Image from "next/image";
import React from "react";
import { MdCalendarMonth } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function UpcomingEvents() {
  const router = useRouter();
  const renderEvents = EVENTS.map((event) => (
    <div
      key={event.name}
      className="upcoming_events_card hover:border hover:border-primary active:border active:border-primary cursor-pointer"
    >
      <Image src={event.image} alt={event.name} className="rounded-t-md" />
      <div className="p-4 space-y-4">
        <p className="font-[600]">{event.name}</p>
        <div className="flex space-x-4 text-sm">
          <p className="flex">
            <MdCalendarMonth className="my-auto mr-2" /> {event.date}
          </p>
          <p className="flex">
            <HiOutlineLocationMarker className="my-auto mr-2" />{" "}
            {event.location}
          </p>
        </div>
        <div className="mt-auto">
          <Button
            className="hover:bg-primary"
            onClick={() => router.push(`/tickets-and-events/${event.id}`)}
          >
            Buy Tickets
          </Button>
        </div>
      </div>
    </div>
  ));

  const renderPreviousEvents = EVENTS.slice(0, 3).map((event) => (
    <div
      key={event.name}
      className="upcoming_events_card hover:border hover:border-primary active:border active:border-primary cursor-pointer "
    >
      <Image src={event.image} alt={event.name} className="rounded-t-md" />
      <div className="p-4 space-y-4">
        <Link href={`/tickets-and-events/${event.id}`}>
          <p className="font-[600] hover:underline">{event.name}</p>
        </Link>
        <div className="flex space-x-4 text-sm">
          <p className="flex">
            <MdCalendarMonth className="my-auto mr-2" /> {event.date}
          </p>
          <p className="flex">
            <HiOutlineLocationMarker className="my-auto mr-2" />{" "}
            {event.location}
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <Container>
      <div className="lg:mt-20 mt-8 px-8">
        <h5 className="lg:text-4xl text-2xl font-[700]  py-5 ">Upcoming Events</h5>
        <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12">{renderEvents}</div>
        <h5 className="lg:text-4xl text-2xl font-[700] lg:mt-20 mt-8 py-5 ">
          Previous Events & Webinars
        </h5>
        <div className="grid lg:grid-cols-3 gap-x-6 gap-y-12">
          {renderPreviousEvents}
        </div>
      </div>
    </Container>
  );
}
