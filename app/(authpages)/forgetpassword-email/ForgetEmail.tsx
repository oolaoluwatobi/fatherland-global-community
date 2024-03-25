"use client";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function ForgetEmail() {
  const [isPending, setIsPending] = useState(false);
  const [email, setEmail] = useState("");

  const submitEmail = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPending(true);

    try {
      const data = {
        email,
      };
      console.log(data,"data.......")
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/forgot-password`,
        data
      );
      console.log(res.data,"responseData forget email")
      toast.success(`${res.data.message}`)
      if (res.data.message === "Password reset email sent.") {
        toast.success("redirecting to OTP");
        router.replace("/otp");
      }
    } catch (error: any) {
      console.log(error.response?.data?.message);
      toast.error(
        `${
          error.response?.data?.message ? error.response?.data?.message
            : "Something went wrong, Signed up failed"
        }`
      );
      // toast.error("Something went wrong, Signed up failed");
      // console.log("Error", error);
      // if (error?.response?.data?.message)
      //   setErrorMesage(error?.response?.data?.message);
    } finally {
      setIsPending(false);
      // toast.loading
    }
  };
  const router = useRouter();

  return (
    <div className="container box border bg-green-300 mx-auto mt-36 py-10">
      <h1 className="text-center ">Reset Password</h1>
      <div>
        <form action="">
          <label
            htmlFor="username"
            className="text-bold font-[500] lg:text-2xl ">
            Email Address
          </label>{" "}
          <br /> {""}
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value )}
            placeholder="example@gmail.com"
            className="py-3 px-5 w-full placeholder-[#666666] "
          />
          {/* <label
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
          /> */}
          <div className="flex justify-center">
            <button onClick={e => submitEmail(e)} className=" py-[0.646rem] px-[1.375rem] rounded-[5px] bg-[#FF8800] text-white text-base font-semibold break-words mx-auto">
              {isPending ? (
                <Loader className="animate-spin h-4 w-4" />
              ) : (
                "Next"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
