"use client";
import Image from "next/image";
import logo from '@/public/WhatsApp_Image_2023-11-15_at_09.58 1 (1).png'
import Dropdown from "./ui/dropdown";
import React from "react";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  // NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const routes = [
  {
    href: "/welcome-page",
    label: "Welcome Page",
  },
  {
    href: "/community",
    label: "Work in progress",
    dropDown: [
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
    ],
  },
  {
    href: "/membershipplans",
    label: "Membership Plans",
  },
  {
    href: "/payment-details",
    label: "Payment Details",
  },
];

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between p-3 bg-red-20 bg-white w-full sticky top-0 z-50
    ">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center ">
            <Link href="/" className="ml-4 lg:ml-0">
              <Image src={logo} alt="" className=""/>
            </Link>
          </div>
             
          <div className="flex">
            <nav className="mx6 lg:flex items-center space-x4 lg:space-x6 hidden md:bloc">
              {routes.map((route, i) =>
                route.href === "/community" ? (
                  <React.Fragment key={i}>
                    <NavigationMenu>
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          {/* <NavigationMenuTrigger>
                            {route.label}
                            
                          </NavigationMenuTrigger> */}
                          {/* <NavigationMenuContent>
                            {route.dropDown?.map((route, i) => (
                              <React.Fragment key={i}>
                                <NavigationMenuLink>
                                  <Link
                                    href={route.href}
                                    className="text-sm font-medium transition-colors  flex flex-row w-full"
                                  >
                                    {route.label}
                                  </Link>
                                </NavigationMenuLink>
                              </React.Fragment>
                              
                            ))}
                            
                          </NavigationMenuContent> */}
                           <Dropdown />
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>
                    <Button asChild variant="navlink" className="text-black hover:no-underline">
                      <Link
                        href={route.href}
                        className="text-sm font-medium transition-colors"
                      >
                        {route.label}
                      </Link>
                    </Button>
                  </React.Fragment>
                )
              )}
            </nav>

            <div className="space-x-2">
              <Button className="bg-[#FF8800] text-white hover:bg-[#ff8800d9]">
                <Link
                  href="/becomeamember"
                  className="text-sm font-medium transition-colors"
                >
                  Become a Member
                </Link>
              </Button>
              <Button variant="outline" className="border-[#FF8800] hover:bg-white">
                <Link
                  href="/loginpage"
                  className="text-sm font-medium transition-colors text-[#ff8800] "
                >
                  Log In
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
