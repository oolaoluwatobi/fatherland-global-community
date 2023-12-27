import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'



type Props = {}
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

const Sidebar = (props: Props) => {
    const router=useRouter()
  return (
    <Sheet>
        <SheetTrigger>
            <MenuIcon />
        </SheetTrigger>
        
        <SheetContent>
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
          
          <Button onClick={()=>router.push('/becomeamember')} className='bg-secondary'>
              Become a member
          </Button> <br />

          <Button onClick={()=>router.push('/loginpage')} className='bg-secondary'>
              Login
          </Button>

        </SheetContent>
    </Sheet>
  )
}

export default Sidebar