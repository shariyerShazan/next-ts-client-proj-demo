"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "./../../../../assets/main/home/header/logo.png"
import frame from "./../../../../assets/main/home/header/Frame.png"
import { Button } from "@/components/ui/button";

const Header = () => {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/category", label: "Categories" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50  w-[90%] md:w-[80%] backdrop-blur-md bg-white/70 border border-white/30 rounded-full shadow-lg">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <h3 className="text-lg font-semibold text-gray-800">Privé Estates</h3>
        </div>

        {/* Middle: Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-[#cba65f] transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Frame + Login */}
        <div className="flex items-center gap-3">
          <Image src={frame} alt="frame icon" width={28} height={28} />
          <Button className="!bg-[#b18d4f] !text-white !px-10 !py-2 !rounded-full !font-semibold hover:!bg-[#b18d4f]">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
