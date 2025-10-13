"use client";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const HeroSocialLink = () => {
  const socials = [
    { icon: <FaFacebookF />, href: "https://facebook.com" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
    { icon: <FaInstagram />, href: "https://instagram.com" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
  ];

  return (
    <div
      className="
        fixed 
        top-1/2 right-0 p-5 -translate-y-1/2 
        flex flex-col items-center gap-4 
        bg-white/20 
        backdrop-blur-2xl 
        p-3 
        rounded-l-2xl 
        shadow-lg 
        z-50
      "
    >
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-white text-xl 
            hover:text-[#cba65f] 
            bg-[#cba65f]
            transition 
            p-2 
            rounded-lg 
            hover:bg-white/20
          "
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default HeroSocialLink;
