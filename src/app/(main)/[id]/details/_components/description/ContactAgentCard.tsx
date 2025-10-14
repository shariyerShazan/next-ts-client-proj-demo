"use client";

import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import user from "../../../../../../assets/main/home/testimonial/userF.png"

const ContactAgentCard = () => {
  return (
    <Card className="max-w-md border border-gray-300 rounded-xl shadow-sm">
      <CardContent className="p-6 space-y-5">
        {/* Agent Info */}
        <div className="flex items-center gap-4">
          <Image
            src={user} 
            alt="Agent"
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">Priya</h3>
            <p className="text-sm text-gray-500">
              1 month with JamesEdition
            </p>
            <button className="flex items-center gap-2 text-sm text-gray-600 mt-1 hover:underline">
              <FaPhone className="text-gray-500" /> Show phone number
            </button>
          </div>
        </div>

        {/* Contact Form */}
        <div className="space-y-3">
          <div>
            <Input placeholder="Priya"  className="focus:!ring-0"/>
          </div>
          <div>
            <Input placeholder="priya@gmail.com" className="focus:!ring-0" type="email" />
          </div>
          <div className="flex">
            <select className="border  rounded-l-md px-2 text-sm outline-none">
              <option value="+880">+880</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+971">+971</option>
            </select>
            <Input
              placeholder="Phone (optional)"
              className="rounded-l-none border-l-0 focus:!ring-0"
            />
          </div>
          <Textarea
          className="focus:!ring-0"
            defaultValue="Please contact me regarding Beacon of luxury within the country's priciest zip code"
          />
        </div>

        {/* Submit Button */}
        <Button className="w-full bg-[#CDAE66] hover:bg-[#b89959] text-white">
          Contact Agent
        </Button>

        {/* Checkboxes */}
        <div className="space-y-2 pt-2">
          <div className="flex items-top space-x-2">
            <Checkbox id="notify" defaultChecked />
            <Label
              htmlFor="notify"
              className="text-sm text-gray-700 cursor-pointer"
            >
              Notify me via email when similar listings appear
            </Label>
          </div>

          <div className="flex items-top gap-2">
            <Checkbox id="terms" defaultChecked />
            <Label
              htmlFor="terms"
              className="text-sm text-gray-700 cursor-pointer inline-flex flex-wrap"
            >
              I agree to{" "}
              <a href="#" className="underline hover:text-gray-900 ">
                Terms of Use
              </a>{" "}
              and{" "}
              <a href="#" className="underline hover:text-gray-900">
                Privacy Policy
              </a>
            </Label>
          </div>

        </div>
      </CardContent>
    </Card>
  );
};

export default ContactAgentCard;
