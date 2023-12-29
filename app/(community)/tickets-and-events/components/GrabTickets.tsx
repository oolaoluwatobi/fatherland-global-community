"use client";

import style from "./styles.module.css";
import React from "react";

export default function GrabTickets() {
  return (
    <div className=" lg:h-[43.688rem]">
      <main className={`${style.hero} relative  lg:pt-[7.25rem] pt-12`}>
        <div className="mx-auto text-center container">
          <h1 className=" mt20 lg:text-5xl text-white text-2xl font-[800] leading-snug">
            Grab Your Tickets To{" "}
            <span className="text-secondary">Spectacular</span> <br /> Events
          </h1>
          <p className="max-w-[56.75rem] mx-auto lg:text-xl text-sm lg:leading-7 text-center lg:mt-10 mt-8 lg:pb-[9.938rem] pb-8 text-white">
            Experience Life&apos;s Highlights by finding your perfect event and
            securing your tickets to series of Africa-inclined events throughout
            the entire year!
          </p>
        </div>

        <section className="container pb-8 lg:pb-0">
          <div className="max-w-7xl container lg:absolute lg:-bottom-[8rem] right-[7.5rem] left-[7.5rem] lg:h-[252px] mx-auto border border-[#FF8800] bg-white rounded-[10px]">
            <h5 className="pt-4 text-[#252525] font-[600] lg:text-2xl text-lg lg:px-[3.25rem] text-center lg:text-start">
              Find Your Next Event
            </h5>
            <form
              action=""
              className=" max-w-7xl mx-auto lg:flex py-10 w-full lg:pl-[3.25rem]"
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="event" className="font-[600]">
                  Search for event
                </label>
                <input
                  type="text"
                  id="event"
                  name="event"
                  placeholder="Enter event name"
                  className="px-4 py-2 bg-[#D9D9D94A] rounded-lg lg:w-[19.563rem] w-full mr-[2.5rem]"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="location" className="font-[600] mt-2 lg:mt-0">
                  Place
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter location"
                  className="px-4 py-2 bg-[#D9D9D94A] rounded-lg lg:w-[19.563rem] w-full mr-[2.5rem]"
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="time" className="font-[600] mt-2 lg:mt-0">
                  Time
                </label>
                <input
                  type="text"
                  id="time"
                  name="time"
                  placeholder="Today"
                  className="px-4 py-2 bg-[#D9D9D94A] rounded-lg lg:w-[19.563rem] mr-[2.5rem] w-full"
                  required
                />
              </div>
              <div className="bg-red-20 flex justify-center lg:justify-start mt-4 lg:mt-0">
                <button className="bg-primary text-white px-6 py-2 inline mt-auto rounded-lg">
                  Search
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
