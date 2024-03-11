import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Link from 'next/link'
import { MenuIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import logo from "@/public/WhatsApp_Image_2023-11-15_at_09.58 1 (1).png";
import Image from 'next/image'
import { usePathname } from 'next/navigation';

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
      href: "/book-a-ticket",
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
    {
      href: "/privacy",
      label:'Privacy'
    },
    {
      href: "/becomeamember",
      label: "Become a member",
    },
  ] as const;

const Sidebar = (props: Props) => {
    const router=useRouter()
    const pathname = usePathname()
  return (
    <Sheet>
        <SheetTrigger className=''>
            <MenuIcon />
        </SheetTrigger>
        <SheetContent className='pt16 p-0 bg-[#FFFFFF30'>
      
        <Image src={logo} alt="" className='w-32 mb-8 pt-2'/>
        
        {routes.map((route, i) => (
            <div key={i} className="text-white z-50 mx-4 mb-2">
              <div>
                <Link
                  href={route.href}
                   className={`text-xs font-medium transition-colors text-black  flex flex-row w-full ${pathname.includes(route.href) ? 
                    'bg-[#26D44B33] border-[3px] border-secondary border-t-0 border-b-0 border-r-0 p-2' : ''}`}
                >
                  {route.label}
                </Link>
              </div>
            </div>
          ))}
          <Button onClick={()=>router.push('/loginpage')} className='bg-secondary  mx-4'>
              Login
          </Button>
        </SheetContent>
    </Sheet>
  )
}

export default Sidebar