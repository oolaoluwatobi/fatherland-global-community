import Header from "@/components/Header";
import "../globals.css";
import React from 'react'
import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { Raleway } from "next/font/google";
import { Toaster } from "@/lib/Toaster";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fatherland Global",
  description: "fatherland global community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className={`${raleway.className} min-h-screen flex flex-col  mx-auto bg-[#D9D9D97D]`}>
        <Toaster />
        <Header />
        {children}
        <Footer />
      </div>
  );
}
