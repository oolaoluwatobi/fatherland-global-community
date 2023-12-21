"use client";
import { useState } from "react";
import Link from "next/link";
export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const routes = [
    {
      href: "/payment-details",
      label: "Payment Details",
    },
    {
      href: "/welcome-page",
      label: " Welcome page ",
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
      href: "/store",
      label: "Store",
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
      href: "/exploreculturallearning",
      label: "Explore cultural L",
    },
    {
      href: "/about-cultural-learning",
      label: "Cultural Learning",
    },
    {
      href: "/category",
      label: "Category",
    },
    {
      href: "/campus",
      label: "Campus",
    },
    {
      href: "/diversity-and-inclusion",
      label: "Diversity and inclusion",
    },
  ] as const;

  return (
    <div className="flex items-center justify-between py-4">
      <button className=" lg:hidden focus:outline-none " onClick={toggleMenu}>
        <svg
          className="w-6 h-6 text-black"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${isOpen ? "hidden" : "block"}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
          <path
            className={`${isOpen ? "block" : "hidden"}`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        <ul
          className={`${
            isOpen ? "top-20 right-0 opacity-100" : "-top-40"
          } md:opacity-100 opacity-0 md:flex md:items-center md:mr-4 ml-auto duration-500 md:w-auto z-[-1] md:z-auto md:static 
        absolute text-whit text-red600 wfull py-2 md:py-0 transition-all ease-in bg-opacity-70 backdrop-blur-xl backdrop-filter 
        md:backdrop-blur-none md:bg-opacity-0 md:backdrop-filter-none align-baseline shadow-md sha md:shadow-none roundedxl 
        bg-[#FFFFFF30]  md:bg-none px-4`}
        >
          {routes.map((route, i) => (
            <div key={i} className="text-white z-50">
              <div>
                <Link
                  href={route.href}
                  className="text-sm font-medium transition-colors text-black  flex flex-row w-full"
                >
                  {route.label}
                </Link>
              </div>
            </div>
          ))}
          <Link href="/become-a-member">
            <li className="border-[#FF8800] border hover:bg-white text-sm font-medium rounded-[18px] text-[#ff8800] my-3 py-2">
              Become a member
            </li>
          </Link>
          <Link href="/loginpage">
            <li className="border-[#FF8800] border hover:bg-white text-sm font-medium rounded-[18px]  text-[#ff8800] py-2">
              Login
            </li>
          </Link>
        </ul>
      </button>
    </div>
  );
}
