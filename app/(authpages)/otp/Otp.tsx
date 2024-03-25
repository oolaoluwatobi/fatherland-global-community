"use client";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function SetPassword() {
  const [token, setToken] = React.useState("");
  const [otp, setOtp] = useState(" ");
  const router = useRouter();

  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsPending(true);
    const form = e.currentTarget;
    const formData = new FormData();

    try {
      const data = {
        token,
      };

      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/verify-password-token`,
        data
      );

      if (res.data.message === "Provided token is invalid!") {
        toast.error("Token expired! Kindly check email for another token.");
        return null;
      }

      // console.log(res, res.data, res?.data?.token, "[VERIYFYOTP]");
      console.log(res.data, "[VERIYFYOTP]");

      if (res?.data?.status) {
        toast.success(
          "Token Verified Successfully, Please Reset Your Password"
        );
        router.replace("/setpassword");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid token, Please try again!");
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="container border bg-green-300 mx-auto mt-36 py-10  ">
      <h1 className="text-center "></h1>
      <div>
        <form action="" className="">
          <label
            htmlFor="username"
            className="text-bold font-[500] justfy-center text-red-600 lg:text-2xl ">
            Check your Email reset OTP
          </label>{" "}
          <br /> {""}
          <div className="space-y-2 fle justify-center">
            <InputOTP
              maxLength={6}
              value={token}
              onChange={(token) => setToken(token)}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <div className="text-center text-sm">
              {token === "" ? (
                <>Enter your one-time password.</>
              ) : (
                <>You entered: {token}</>
              )}
            </div>
          </div>
          <div className="mt-8 flex justify-center bg-orange-00">
            <button
              onClick={(e) => handleSubmit(e)}
              disabled={isPending}
              className=" text-center px-0 py-2">
              {" "}
              {isPending ? <Loader className="animate-spin w-4 " /> : "Login"}
              {/* Login */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
