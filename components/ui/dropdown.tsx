"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons"

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
  };

  const routes = [
    {
      href: "/about-us",
      label: "About us ",
    },
    {
      href: "/advertisements",
      label: "Advertisement",
    },
    {
      href: "/african-taste",
      label: "African Taste",
    },
    {
      href: "/book-a-ticket ",
      label: "Book a ticket ",
    },
    {
      href: "/communityresources",
      label: "Community Resources",
    },
    {
      href: "/corporation",
      label: "Corporation",
    },
    {
      href: "/press",
      label: "Press",
    },
    {
      href: "/tickets-and-events",
      label: "Tickets and events",
    },
    {
      href: "/travel-and-spirituality",
      label: "Travel and spirituality",
    },
    {
      href: "/contact-us",
      label: "Contact Us",
    },
    {
      href: "/help-and-support",
      label: "Help and Support",
    },
    {
      href: "exploreculturallearning",
      label:'Explore cultural L'
    },
    {
      href: "about-cultural-learning",
      label:'Cultural Learning'
    },
    {
      href: "/category",
      label:'Category'
    },
  ] as const;

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className=" inline-flex justify-center items-center w-full rounded-0 borde bordergray-300 bg-white px-7 py-2 text-sm font-medium text-gray-700 shadowsm hover:bg-gray50 focus:outline-none hover:bg-[#2EA658] focus:ring-indigo500 hover:text-white"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="textblack text-base font-medium break-words pr-3">
            Community
          </span>
            <ChevronDownIcon />
          {isOpen && (
        <div
          className="px-2 py-3 origin-top-right absolute top-7 right0 mt-2 w-full roundedmd shadowlg bg-[#2EA658] ring1 ringblack ring-opacity5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          {routes.map((route, i) => (
            <div key={i} className="text-white z-50">
              <div>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors  flex flex-row w-full"
                >
                  {route.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
        </button>
       
      </div>
    </div>
  );
};

export default Dropdown;
