'use client'
import React from 'react';
import { Button } from './button';
import { useState } from 'react';
import Link from 'next/link';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

const route=[
      {
        href: "/about-us",
        label: "About us ",
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
    ]

  return (
    <div className="relative inline-block text-left">
      <div>
        <Button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full rounded-md border bordergray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring2 focus:ring-indigo500 focus:ringoffset-2"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          Dropdown
          {/* You can replace "Dropdown" with your default selected option */}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute top-7 right0 mt-2 w-full rounded-md shadowlg bg-[#2EA658] ring-1 ringblack ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >

          {route.map((route, i) => (
                              <div key={i} className='text-white z-50'>
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
    </div>
  );
};

export default Dropdown;