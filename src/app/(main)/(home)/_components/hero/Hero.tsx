"use client";
import React from "react";
import Image from "next/image";
import heroOne from "../../../../../assets/home/hero/heroOne.jpg"                     
import HeroSocialLink from "./HeroSocialLink";

const Hero = () => {
  return (
    <section className="relative w-full  h-[90vh] flex items-end justify-start overflow-hidden">
      {/* Background image */}
      <Image
        src={heroOne}
        alt="Luxury house"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" /> */}

      {/* Content */}
      <div className="container">
            <div className="relative z-10   text-white px-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Discover the Art of <br />
          <span className="text-[#cba65f]">Luxury Living</span>
        </h1>
        <p className="text-gray-200 text-sm md:text-lg mb-6">
          One search • 560,000+ listings • 21,000+ trusted sellers • 120 countries
        </p>     {/* <button className="bg-[#cba65f] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#b18d4f] transition">
          Explore Now
        </button>
    */}
      </div>
      </div>
      
      {/* social links */}
      <HeroSocialLink />
    </section>
  );
};

export default Hero;
