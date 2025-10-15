"use client";
import React, { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import logo from "../../../../assets/main/home/header/logo.png"
import Image from "next/image";

const OtpVerify = () => {
 
    const [value, setValue] = React.useState("")

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-lg p-6 bg-white rounded-2xl shadow-md">
        {/* logo with compnayNmae */}
        <div className="flex items-center justify-center my-4 gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h3 className="text-lg font-semibold text-gray-800">Privé Estates</h3>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
           OTP Required
        </h2>
        <p className="mb-6 text-sm text-gray-600 text-center">
            We’ve sent you an OTP code in your mail <span className=" underline">hossain@gmail.com</span> 
            Please, check your email box for the code.
        </p>

        {/* OTP Input */}
        <div className="flex justify-center mb-6">
           <InputOTP
                maxLength={6}
                value={value}
                onChange={(value) => setValue(value)}
              >
                <InputOTPGroup>
                    <div className="flex gap-2">
                        <InputOTPSlot index={0}   data-placeholder="-" className=""/>
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                        <InputOTPSlot index={3} />
                    </div>
                {/* <InputOTPSlot index={4} />
                <InputOTPSlot index={5} /> */}
                </InputOTPGroup>
        </InputOTP>
        </div>

        {/* Verify Button */}
        <Button
          className="w-full bg-[#CDAE66] hover:bg-[#b89959] text-white"
        //   onClick={handleVerify}
        >
          Verify
        </Button>

        {/* Resend link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Didn’t receive code?{" "}
          <button
            type="button"
            className="text-[#CDAE66] font-medium hover:underline"
            // onClick={handleResend}
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default OtpVerify;
