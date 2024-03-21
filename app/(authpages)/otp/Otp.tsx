"use client"
import axios from "axios";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SetPassword() {
  const [email, setEmail] = useState("")
  const [otp,setOtp] = useState (" ")
  const router = useRouter();

    const [isPending, setIsPending] = useState (false);

    const  handleSubmit = async ( e: React.MouseEvent<HTMLButtonElement, MouseEvent>)  => {
      e.preventDefault();
        setIsPending(true)
        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
          console.log(formData, "[FORMDATA]");
          const input1 = formData.get("input-1");
          const input2 = formData.get("input-3");
          const input3 = formData.get("input-3");
          const input4 = formData.get("input-4");

          const data:{
            token:string;
          } = {token: `${input1}${input2}${input3}${input4}`,
        };
        
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/v1/reset-password`,
          data
        );
        
          if(res.data.message === "Provided token is invalid!" ){
            toast.error("Token expired! Kindly check email for another token.")
            return null
          }
          
          // console.log(res, res.data, res?.data?.token, "[VERIYFYOTP]");
          console.log( res.data,  "[VERIYFYOTP]");
    
          if (res?.data?.token) {
            console.log(res?.data.token);
            // addUserToken(res?.data.token);
          }
          
          if ( res?.data?.message === "Token Verified Successfully, Please Reset Your Password") {
            toast.success("Token Verified Successfully, Please Reset Your Password")
           router.replace("/setpassword");
          }
          
        } catch (error) {
        console.log(error);
        toast.error("Invalid token, Please try again!")
        
      } finally {
        setIsPending(false);
      }
          
 }

  return (
    <div className="container box border bg-green-300 mx-auto mt-36 py-10">
      <h1 className="text-center "></h1>
      <div>
        <form action="">
          <label
            htmlFor="username"
            className="text-bold font-[500] lg:text-2xl ">
              Check your Email reset OTP
          </label>{" "}
          <br /> {""}
          <div>

          <input
            type="number"
            id="password"
            name="password"
            value={otp}
            // placeholder="password"
            className="h-20 w-20 aspect-square  placeholder-[#666666] "
          />

          </div>
      

          <button onClick={ e => handleSubmit (e)} disabled={isPending} className=" text-center px-4"> {isPending ? ( <Loader  className="animate-spin w-4 "/>) : "Login" }
            {/* Login */}
          </button>
        </form>
      </div>
    </div>
  );
}
