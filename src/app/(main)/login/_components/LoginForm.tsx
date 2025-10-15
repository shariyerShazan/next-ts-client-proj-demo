"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link";
import { MdFacebook } from "react-icons/md";


const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-lg p-6 rounded-2xl shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Login
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Email */}
          <div className="space-y-1">
            <Label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input id="email" placeholder="Enter your email" type="email" className="focus:!ring-0"/>
          </div>

          {/* Password */}
          <div className="space-y-1 relative">
            <Label htmlFor="password">
              Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              className="focus:!ring-0"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-6.5 text-gray-500"
            >
              {showPassword ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
            </button>
          </div>

           <div className="flex justify-between">
              <div className="flex items-center gap-2">
                   <Checkbox />
                   <p>Remember me</p>
              </div>
              <Button variant="link">Forget Password</Button>
           </div>

          {/* Login Button */}
          <Button className="w-full bg-[#CDAE66] hover:bg-[#b89959] text-white font-medium text-base py-2.5 rounded-md">
            Login
          </Button>

            {/* social login */}
             <div>
                 <p className="text-center text-sm">Continue with </p>

                 <div className="flex gap-2 justify-center items-center">
                    <Button variant="outline" className="w-[49%] !border-gray-300">
                        <FaGoogle />
                        Google
                    </Button>
                    <Button variant="outline"  className="w-[49%] !border-gray-300">
                        <FaFacebook />
                        Facebook
                    </Button>
                 </div>
             </div>

          {/* Register Link */}
          <p className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link href={"register"}   className="text-[#CDAE66] font-medium hover:underline">
              Register
            </Link>
          </p>
          
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
