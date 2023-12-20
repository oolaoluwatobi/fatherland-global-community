"use client";
import Image from "next/image";
import logo from "@/public/WhatsApp_Image_2023-11-15_at_09.58 1 (1).png";
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
import { useRouter } from "next/navigation";
import HamburgerMenu from "./ui/hamburger";

const routes = [
  {
    href: "/about-us",
    label: "Who we are",
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
];

export default function Header() {
  const router = useRouter();
  return (
    <header
      className="sm:flex sm:justify-between p-3 bg-red-20 bg-white w-full sticky top-0 z-50
    "
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center">
            <Link href="/" className="ml4 lg:ml-0">
              <Image src={logo} alt="" className="" />
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
                    <Button
                      asChild
                      variant="navlink"
                      className="text-black hover:no-underline"
                    >
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
              <Button
                className="bg-[#FF8800] text-white hidden lg:inline hover:bg-[#ff8800d9] text-sm font-medium transition-colors"
                onClick={() => router.push("/becomeamember")}
              >
                Become a Member 
              </Button>
              <Button
                variant="outline"
                className="border-[#FF8800] hover:bg-white hidden lg:inline text-sm font-medium transition-colors text-[#ff8800]"
                onClick={() => router.push("/loginpage")}
              >
                Log In
              </Button>
              <div className="lg:hidden">
              <HamburgerMenu/>
              </div>
              
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
