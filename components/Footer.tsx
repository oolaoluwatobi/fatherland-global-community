import Image from "next/image";
import Link from "next/link";
import { Raleway } from "next/font/google";
import React from "react";
import Container from "./ui/container";
import fatherlandLogo from "@/public/assets/fatherland-logo-footer.png";

import { LiaFacebook, LiaLinkedin } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiEnvelope } from "react-icons/bi";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

const whoWeAre = [
  {
    href: "/about-us",
    label: "About us",
  },
  {
    href: "/team-members",
    label: "Team Members",
  },
  {
    href: "/career-opportunity",
    label: "Career Opportunity",
  },
  {
    href: "/corporate-governance",
    label: "corporate Governance",
  },
  {
    href: "/press-releases",
    label: "Press Releases",
  },
  {
    href: "/fatherland-foundation",
    label: "Fatherland Foundation",
  },
];

const quickLinks = [
  {
    href: "/benefits-and-brand",
    label: "Benefits and Brand",
  },
  {
    href: "/join-conversation",
    label: "Join Conversation",
  },
  {
    href: "/tickets-and-events",
    label: "Tickets and Events",
  },
  {
    href: "/african-taste",
    label: "African Taste",
  },
  {
    href: "/travel-and-spirituality",
    label: "Travel and Spirituality",
  },
  {
    href: "/advertise-with-us",
    label: "Advertise with us",
  },
];

const exploreBrands = [
  {
    href: "/foretvhub",
    label: "Foretvhub",
  },
  {
    href: "/foremedia-music",
    label: "Foremedia Music",
  },
  {
    href: "/fortune-entrepreneur",
    label: "Fortune Entrepreneur",
  },
  {
    href: "/isse",
    label: "Isse",
  },
  {
    href: "/fameet",
    label: "Fameet",
  },
  {
    href: "/ecl",
    label: "Ecl",
  },
  {
    href: "/real-estate",
    label: "Real Estate",
  },
];

const termsOfUse = [
  {
    href: "/community-standard",
    label: "Community Standard",
  },
  {
    href: "/foremedia-music",
    label: "Republishing Guildlines",
  },
  {
    href: "/membership-agreement",
    label: "Membership Agreement",
  },
  {
    href: "/terms-and-conditions",
    label: "Terms &amp; Conditions",
  },
  {
    href: "/frequently-asked-questions",
    label: "Frequently Asked Questions",
  },
  {
    href: "/help-center",
    label: "Help Center",
  },
  {
    href: "/refund-policy",
    label: "Refund Policy",
  },
  {
    href: "/privacy-policy",
    label: "Privacy Policy",
  },
];

const socials = [
  {
    href: "https://facebook.com",
    icon: React.createElement(LiaFacebook),
  },
  {
    href: "https://linkedin.com",
    icon: React.createElement(LiaLinkedin),
  },
  {
    href: "https://instagram.com",
    icon: React.createElement(FaInstagram),
  },
  {
    href: "https://twitter.com",
    icon: React.createElement(FaXTwitter),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      className={`${raleway.className} bg-[#14202D] bg-red-20 text-white `}
    >
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-start px-6 py-8 md:py-12 min-w-full  text-[] ">
          <div className="mb-8 lg:pl-4 md:mb-0 ">
            <h1 className="font-bold ">Who we are</h1>
            <ul className="mt-4 text-[#D5E0EA] space-y-4 text-sm">
              {whoWeAre.map((link, i) => (
                <li key={i} className="">
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:pl-4 md:mb-0 ">
            <h1 className="font-bold ">Quick Links</h1>
            <ul className="mt-4 text-[#D5E0EA] space-y-4 text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:pl-4 md:mb-0 ">
            <h1 className="font-bold ">Explore Brands</h1>
            <ul className="mt-4 text-[#D5E0EA] space-y-4 text-sm">
              {exploreBrands.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8 lg:pl-4 md:mb-0 ">
            <h1 className="font-bold ">Terms of Use</h1>
            <ul className="mt-4 text-[#D5E0EA] space-y-4 text-sm">
              {termsOfUse.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-blue-20">
            <div className="mt-4 md:mt-2 pb-15">
              <h1 className="font-bold">Follow us</h1>
            </div>
            <div className="flex justify-between px6 md:px-0 w-full mt-8 md:mt-4 md:max-w-xl mx-auto md:justify-start gap-4 bg-red-40 sm:mx2   text-[#f4f9fd] ">
              {socials.map((item, i) => (
                <p key={i}>
                  <Link href={item.href} className="w-10 h-10">
                    {item.icon}
                  </Link>
                </p>
              ))}
            </div>
            <div className="mt-8">
              <p className="space-x-2 flex items-baseline">
                <BiEnvelope className="my-auto" />
                <span className="text-sm">
                  <a href="mailto:office@fatherlandglobal.com" target="_blank" rel="noreferrer">office@fatherlandglobal.com</a>
                </span>
              </p>
              <p className="space-x-2 flex items-baseline">
                <HiOutlineGlobeAlt className="my-auto" />
                <span className="text-sm">
                  <a href={`https://fatherlandglobal.com`} target="_blank" rel="noreferrer">www.fatherlandglobal.com</a>
                </span>
              </p>
            </div>
          </div>
        </div>

        <hr />

        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center bg-whit bg- pt-3 px-6 md:px-0 pb-4">
          <div className="md:order-2 mr-6">
            <p className=" text-[#D5E0EA] mt-0 md:mt-4 text-center  bg-red-20 nowhihte">
              All Rights Reserved by Fatherland Group {currentYear}
            </p>
          </div>
          <div className="md:order-1 mb-8  md:mb-0 mt-5 bg-red-20 w-full">
            <Image
              className="text-white w-48 mx-auto md:mx-4 mt-4 md:mt-0 bg-green-20 "
              src={fatherlandLogo}
              alt="fatherland-logo"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
}
