"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "../loginpage/styles.module.css";
import { signIn } from "next-auth/react";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

const initState = {
  email: "",
  password: "",
};

export default function Loginform({error}: any) {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(initState);
  const [errorMessage, setErrorMesage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(data);
    setIsFetching(true);
    
    const { email, password } = data;
    try {
      const result = await signIn("credentials", {
        email,
        password,
        // redirect: true,
        // callbackUrl: "/store",
      });
      
    } catch (error: any) {
      console.log(error, 'ERROR')
      toast.error(`${error?.response?.data?.message}`)
    } finally {
      setIsFetching(false);
    }
    
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;

    setData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
    <main
      className={`${styles.login_backgrounds} pt-[9rem] pb-[120px container mx-auto pb-[120px]`}>
      <div className="border border-[#1ABC94] rounded-[15px] mx-auto bg-white max-w-[51.813rem] lg:h-[41.813rem lg:pb-[4.375rem] pb-4 mb-[20rem">
        <div>
          <p className="text-[#333333] lg:text-3xl text-xl container font-bold break-words text-center lg:pt-[4.188rem] pt-8 pb-[0.5rem]">
            Login to Fatherland Community
          </p>
          <p className="text-[#333333] lg:text-base text-sm container font-normal leading-6 break-words text-center">
            Welcome back to your Afrocentric community
          </p>
        </div>
        {error?.error && (
        <p className="text-red-700 bg-red-100 py-6 px-5 text-center mt-4 rounded-md">
          {error?.error}
        </p>
      )}
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="lg:mt-[3.125rem] mt-4 md:ms-[2.375rem] mx-[1rem] md:mx-auto">
          <label
            htmlFor=""
            className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            Email Address
          </label>{" "}
          <br />
          <input
            type="email"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
            required
            className="bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] lg:mb-[2.688rem] mb-4 lg:h-[5rem] h-12 mx-auto placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            placeholder=" example@gmail.com"
          />
          <label
            htmlFor=""
            className="text-[#333333] lg:text-base text-sm font-normal leading-6 break-words">
            Password
          </label>{" "}
          <br />
          <input
            type="password"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
            required
            className="bg-[#F7F9FB] outline-0 w-full lg:w-[47.063rem] mb-[2.688rem lg:h-[5rem] h-12 mx-auto placeholder-[#666666] font-normal lg:text-base text-sm lg:ps-[2.688rem] ps-4"
            placeholder=" *************"
          />{" "}
          <br />
          <div className="flex justify-center lg:mt-[7.625rem] mb-4 mt-4">
            <button
              disabled={isFetching}
              className="text-white text-base font-semibold break-words bg-[#FF8800] px-[2.375rem] py-[0.6888rem] rounded-[5px] mx-auto disabled:bg-gray-500">
              {isFetching ? (
                <Loader className="animate-spin h-4 w-4" />
              ) : (
                "login"
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
