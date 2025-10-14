"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../../assets/main/home/header/logo.png";
import { Button } from "@/components/ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9f9] border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 pt-12 pb-5">
        {/* Top: Logo */}
        <div className="flex items-center gap-2 mb-8">
          <Image src={logo} alt="Privé Estates" width={35} height={35} />
          <h3 className="text-lg font-semibold text-gray-800">Privé Estates</h3>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Subscribe */}
          <div className="col-span-2">
            <p className="text-sm mb-2 font-medium">Subscribe</p>
            <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              />
              <Button className="bg-[#cba65f] hover:bg-[#b7934d] text-white text-sm rounded-none">
                Send →
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Subscribe to our newsletter to receive our weekly feed.
            </p>
          </div>

          {/* Discover */}
          <div>
            <h4 className="text-sm font-medium mb-3">Discover</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Miami</li>
              <li>New York</li>
              <li>Chicago</li>
              <li>Florida</li>
              <li>Los Angeles</li>
              <li>San Diego</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Pricing Plans</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium mb-3">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>info@priveestates.com</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>

          {/* Address & App Buttons */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-medium mb-3">Our Address</h4>
            <p className="text-sm text-gray-600 mb-4">
              90 Fifth Avenue, 3rd Floor <br /> San Francisco, CA 1980
            </p>
            <div className="flex flex-col gap-2">
              <button className="flex items-center justify-center gap-2 bg-[#cba65f] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#b7934d]">
                <FaApple /> App Store
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#cba65f] text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-[#b7934d]">
                <FaGooglePlay /> Google Play
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-500">
          Copyright © 2025. <span className="text-[#cba65f] font-medium">Privé Estates</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
