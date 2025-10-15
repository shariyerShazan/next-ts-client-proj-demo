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
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Link from "next/link";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-lg p-6 !border-gray-300 rounded-2xl shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Registration
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">
          {/* Full Name */}
          <div className="space-y-1">
            <Label htmlFor="name">
              Full Name <span className="text-red-500">*</span>
            </Label>
            <Input id="name" placeholder="John Doe" className="focus:!ring-0" />
          </div>

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

          {/* Confirm Password */}
          <div className="space-y-1 relative">
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="text-red-500">*</span>
            </Label>
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="*******"
              className="focus:!ring-0"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-6.5 text-gray-500"
            >
              {showConfirmPassword ? <FaEyeSlash size={20}/> : <FaEye size={20}/>}
            </button>
          </div>

          {/* Account Type */}
          <div className="space-y-1">
            <Label htmlFor="accountType">
              Account Type <span className="text-red-500">*</span>
            </Label>
            <select
              id="accountType"
              className="w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:outline-none focus:!ring-0 focus:ring-[#CDAE66]"
            >
              <option value="seller">User</option>
              <option value="seller">Seller</option>
              <option value="buyer">Admin</option>
            </select>
          </div>

          {/* Register Button */}
          <Button className="w-full bg-[#CDAE66] hover:bg-[#b89959] text-white font-medium text-base py-2.5 rounded-md">
            Register
          </Button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href={"/login"} className="text-[#CDAE66] font-medium hover:underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterForm;
