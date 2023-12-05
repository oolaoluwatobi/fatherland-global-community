"use client";

import React from "react";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const routes = [
  {
    href: "/whoweare",
    label: "Who We Are",
  },
  {
    href: "/community",
    label: "Community",
    dropDown: [
      {
        href: "/community/joinconversation",
        label: "Join ",
      },
      {
        href: "/community/store",
        label: "Store",
      },
      {
        href: "/community/africantaste ",
        label: "African ",
      },
      {
        href: "/community/travelandspirituality",
        label: "Travel",
      },
      {
        href: "/community/ticketsandevents",
        label: "Tickets",
      },
      {
        href: "/community/advertise",
        label: "Advertise",
      },
      {
        href: "/community/fameet",
        label: "Fameet",
      },
    ],
  },
  {
    href: "/benefitsandbrands",
    label: "Benefits & Brands",
  },
];

export default function Header() {
  return (
    <header className="sm:flex sm:justify-between p-3  bg-red-20 bg-white sticky top-0">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
          <div className="flex items-center ">
            <Link href="/" className="ml-4 lg:ml-0">
              <h1 className="text-xl text-[#26D44B] font-bold">Fatherland</h1>
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
                          <NavigationMenuTrigger>
                            {route.label}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent>
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
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  </React.Fragment>
                ) : (
                  <React.Fragment key={i}>
                    <Button asChild variant="navlink">
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
              <Button>
                <Link
                  href="/becomeamember"
                  className="text-sm font-medium transition-colors"
                >
                  Become a Member
                </Link>
              </Button>
              <Button variant="outline">
                <Link
                  href="/loginpage"
                  className="text-sm font-medium transition-colors    "
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
