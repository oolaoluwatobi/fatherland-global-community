"use client";
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import useEmail from "zustand"
export default function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState ("")
  const [isPending, setIsPending] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsPending(true);
    try{
      const data ={
         password,
        confirmPassword,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/reset-password`,
        data
        ) ;
        toast.success(`${res.data.message}`)
        if(res.data.status === "Password reset successfully."){
          toast.success("password reset Successfully. Please login with your new Password.");
          setTimeout(()=>router.push("/advertisements") ,3000)
        }
      
    }catch(error:any){ 
      console.log(error.response?.data?.message);
      toast.error(`${error.response?.data?.message ? error.response.data.message : 'password does not match'}`)
    }finally{
      setIsPending(false)
    }
  };
  

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
          onChange={(e) =>  setPassword(e.target.value)}
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
          onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            id="password"
            name="password"
            placeholder="************"
            className="py-3 px-5 w-full"
          />
          <button

            onClick={(e) => handleSubmit (e)}
            disabled={isPending}
            className=" text-center px-4">
            {" "}
            {isPending ? <Loader className="animate-spin w-4 " /> : "Login"}
            {/* Login */}
          </button>
        </form>
      </div>
    </div>
  );
}
