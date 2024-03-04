"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function DialogPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleClick1 = () => {
    setIsChecked1(!isChecked1);
  };

  return (
    <div className="">
      <Dialog>
        <DialogTrigger className="mt-auto text-sm px-3  font-medium bg-[#26D44B] text-white p-[0.5rem] border rounded-md">
          Buy Ticket
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center font-bold lg:text-2xl lg:leading-5 lg:mt-[52px] lg:mb-[40px]">
              Payment Methods
            </DialogTitle>
            <DialogDescription className="flex justify-around items-center pb-[50px] bg-red500 gap-4">
              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className={`h-5 w-5`}
                />
                <button
                  onClick={handleClick}
                  className="text-[17px] font-normal lg:leading-4 text-[#000000] text-start flex items-center"
                >
                  {" "}
                  <Image
                    src="/paypal.svg"
                    alt="logo"
                    width={50}
                    height={50}
                  />{" "}
                  <span>
                    Pay with Paypal <br />{" "}
                    <span className="lg:text-sm font-normal lg:leading-3 text-[#000000]">
                      Available in all country
                    </span>
                  </span>
                </button>
              </div>

              <div className="inline-flex items-center">
                <input
                  type="checkbox"
                  id="checkbox"
                  checked={isChecked1}
                  onChange={() => {}}
                  className={`h-5 w-5 `}
                />
                <button
                  onClick={handleClick1}
                  className="text-[17px] font-normal lg:leading-4 text-[#000000] text-start flex items-center"
                >
                  {" "}
                  <Image
                    src="/paystack.svg"
                    alt="logo"
                    width={50}
                    height={50}
                  />{" "}
                  <span>
                    Pay with Paystack <br />{" "}
                    <span className="lg:text-sm font-normal lg:leading-3 text-[#000000]">
                      Available in Nigeria
                    </span>
                  </span>
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
