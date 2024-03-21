"use client"
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";

export default function SetPassword() {

    const [isPending, setIsPending] = useState (false);

    const  handleSubmit = async ()  => {
        setIsPending(true)
 } 
  const router = useRouter(); 

  return (
    <div className="container box border bg-green-300 mx-auto mt-36 py-10">
      <h1 className="text-center ">Set Password</h1>
      <div>
        <form action="">
        <label
            htmlFor="username"
            className="text-bold font-[500] lg:text-2xl mt-2 ">
            set password
          </label>{" "}
          <br /> {""}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="************"
            className="py-3 px-5 w-full"
          />
          <label
            htmlFor="username"
            className="text-bold font-[500] lg:text-2xl mt-2 ">
            confirm password
          </label>{" "}
          <br /> {""}
          <input
            type="password"
            id="password"
            name="password"
            placeholder="************"
            className="py-3 px-5 w-full"
          />

          <button onClick={handleSubmit} disabled={isPending} className=" text-center px-4"> {isPending ? ( <Loader  className="animate-spin w-4 "/>) : "Login" }
            {/* Login */}
          </button>
        </form>
      </div>
    </div>
  );
}
