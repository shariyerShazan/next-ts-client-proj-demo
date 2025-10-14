"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";
import houseOne from "./../../../../../assets/home/article&withUs/houseOne.jpg";
import houseTwo from "./../../../../../assets/home/article&withUs/houseTwo.jpg";
import houseThree from "./../../../../../assets/home/article&withUs/houseThree.jpg";

const ExclusiveProperty = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <h2 className="text-xl md:text-2xl text-center font-semibold text-[#b59b58] mb-12">
        Exclusive Properties
      </h2>

      {/* Grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Left big card */}
        <div className="relative col-span-3 rounded-2xl overflow-hidden group">
          <Image
            src={houseOne}
            alt="Villa One Hyde Park"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent"></div>

          {/* Content */}

            <div className=" absolute top-6 left-3">
                <p className="bg-white/50 text-xs px-3 py-1 rounded-full backdrop-blur-xl mb-2 inline-block">
                   FOR SALE
                </p>
            </div>
          <div className="absolute bottom-5 left-5 text-white">
           
            <h3 className="text-lg font-semibold">Villa One Hyde Park</h3>
            <p className="text-sm text-gray-200">2050 Bloomingdale Ave</p>
            <div className="flex items-center gap-4">
                <p className="text-sm mt-2">$120,000</p>
                <div className="text-xs flex gap-3 mt-1 opacity-90">
                <span>4 🛏</span>
                <span>2 🛁</span>
                <span>350 m²</span>
                </div>
            </div>
          </div>
        </div>

        {/* Right grid */}
        <div className="flex flex-col gap-6 col-span-2">
          {/* Top slider image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={houseTwo}
              alt="House"
              className="w-full h-full object-cover"
            />
            {/* Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-3">
              <button className="bg-white/60 hover:bg-white/80 rounded-full p-2">
                <FaArrowRight className="rotate-180 text-gray-700" />
              </button>
              <button className="bg-white/60 hover:bg-white/80 rounded-full p-2">
                <FaArrowRight className="text-gray-700" />
              </button>
            </div>
          </div>

          {/* Bottom 2 small boxes */}
          <div className="grid grid-cols-2 gap-6">
            {/* Video preview */}
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={houseThree}
                alt="Video Preview"
                className="w-full h-full object-cover"
              />
              <button className="absolute group inset-0 flex justify-center items-center bg-black/20 hover:bg-black/30 transition">
                <FaPlay className="text-white text-xl group-hover:scale-115 transition-all duration-300" />
              </button>
            </div>

            {/* Stats card */}
            <div className="bg-[#cba65f] text-white rounded-2xl flex flex-col justify-between p-6">
              <div>
                <h3 className="text-3xl font-semibold">280+</h3>
                <p className="text-sm opacity-90 mt-1">Properties</p>
                <p className="text-xs opacity-80 mt-3">
                  Explore our wide variety of properties to find your dream home today
                </p>
              </div>
              <div className="flex justify-end mt-4">
                <div className="bg-white/30 hover:bg-white/40 p-2 rounded-full transition">
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveProperty;
