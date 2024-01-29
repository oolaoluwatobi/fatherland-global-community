"use client";

import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import no1 from "@/public/no1.png";
import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import Link from "next/link";
import axios from "axios";
import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function Join() {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [date_of_birth, setDob] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isPending, setIsPending] = useState(false);
  const [errorMessage, setErrorMesage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(
    //   last_name,
    //   email,
    //   password,
    //   date_of_birth,
    //   country,
    //   state,
    //   phone_number
    // );
    setIsPending(true);
    // toast.loading('Signing up...') 

    try {
      const data = {
        first_name,
        last_name,
        email,
        password,
        date_of_birth,
        country,
        state,
        phone_number,
      };
      console.log("[USERDATA]", data);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/register`,
        data
      );
      // addUserData(data);
      // replace("/checkemail");
      // const res: any = formAction(formData);
      console.log(data, res, "[SIGNUP_INIT_RES]");
      toast.success("Signed up successfully")
      if(res.data.status === 200) {
        redirect('/payment-details')
      }
      
    } catch (error: any) {
      toast.error("Something went wrong, Signed up failed")
      console.log("Error", error);
      if (error?.response?.data?.message)
        setErrorMesage(error?.response?.data?.message);
    } finally {
      setIsPending(false);
      // toast.loading
    }
  };

  return (
    <div className="mx-auto lg:pt-[5.563rem] pt-12 max-w-7xl">
      <div className="bg-red300 mx-auto lg:mb-[3.813rem] mb-12">
        <p className="text-[#14202D] lg:text-4xl text-2xl font-bold lg:leading-[56px] break-words text-center lg:pb-[1.313rem] pb-4">
          Join Fatherland Community
        </p>
        <p className="text-[#14202D] lg:text-xl text-base font-normal leading-7 break-words text-center container">
          We will use the information entered here for your membership card
        </p>
      </div>

      <section className="lg:flex justify-around max-w-7xl mx-auto container">
        <main className="bg-white bg-red500 rounded-[15px] px2 max-w-[50rem mxauto mb-12">
          <div className="flex items-center py-[2.044rem] px-[2.25rem]">
            <Image src={no1} alt="" className="" />
            <p className="text-[#14202D] lg:text-2xl text-base font-normal break-words pl-7">
              Create Your Account
            </p>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e)}
            action=""
            className="mxauto px-[2.25rem] pb-[2.914rem]">
            <div className="lg:flex justify-around lg:pb-[2.688rem] pb-4 gap-4 mx-auto">
              <div>
                <label
                  htmlFor=""
                  className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  First Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={first_name}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full lg:w-[20rem] lg:h-[65px] h-12 mb-4 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem ps-4"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  Last Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={last_name}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  className=" w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
            </div>
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words ">
              Email Address
            </label>{" "}
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Phone Number
            </label>{" "}
            <br />
            <input
              type="number"
              id="phone_number"
              name="phone_number"
              value={phone_number}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Date of Birth
            </label>{" "}
            <br />
            <input
              type="date"
              id="date_of_birth"
              name="date_of_birth"
              value={date_of_birth}
              onChange={(e) => setDob(e.target.value)}
              required
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <div className="lg:flex justify-between mx-auto gap-4 pb-[2.688rem]">
              <div>
                <label
                  htmlFor=""
                  className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  Country
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4  bg-[#f4f4f4] rounded-[6px]  mb-4 lg:mb-0 placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                  CIty/State/Province
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className=" w-full lg:w-[20rem] lg:h-[65px] h-12 bg-[#f4f4f4 bg-[#f4f4f4] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
                />
              </div>
            </div>
            {/* <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Select preferred community hub
            </label>{" "}
            <br />
            <select
              name=""
              id=""
              className="w-full bg-[#f4f4f4] lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px]">
              <option
                value=""
                className="px-[2rem text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
                Fatherland Lagos
              </option>
              <option value="" className="px-[0.999rem">
                2
              </option>
              <option value="" className="px-[0.999rem">
                3
              </option>
              <option value="" className="px-[0.999rem">
                4
              </option>
              <option value="" className="px-[0.999rem">
                5
              </option>
            </select> */}
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Password
            </label>{" "}
            <br />
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#f4f4f4] w-full lg:h-[65px] h-12 mb-4 lg:mb-[2.688rem] rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <label
              htmlFor=""
              className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
              Confirm Password
            </label>{" "}
            <br />
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#f4f4f4] w-full lg:h-[65px] mb-4 h-12 rounded-[6px] placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            />
            <div className="flex justify-center">
              <button className=" py-[0.646rem] px-[1.375rem] rounded-[5px] bg-[#FF8800] text-white text-base font-semibold break-words mx-auto">
        {isPending ? (
          <Loader className="animate-spin h-4 w-4" />
        ) : (
          "Continue"
        )}
              </button>
            </div>
          </form>
        </main>

        <div className="containe mx-auto text-center">
          <p className=" pb-[3px] text-[#14202D] text-xl font-normal leading-7 text-center">
            Your Membership Card
          </p>
          <p className="text-[#14202D] lg:text-sm text-xs font-normal leading-7 w-full lg:w-[26.5rem] lg:mb-[3.625rem] mb-4 text-center">
            Your membership card will look like this. It&apos;s important that
            the name on your membership card is correct, as they will be
            required to gain access to community hubs in your location
          </p>

          <Image
            src={card1}
            alt=""
            className="lg:mb-[2.5rem] mb-4 lg:w-[357px] mx-auto"
          />
          <Image
            src={card2}
            alt=""
            className="lg:w-[357px] mb-[2.5rem] mx-auto"
          />
        </div>
      </section>
    </div>
  );
}
