import React from "react";
import Image from "next/image";

import house from "../../../../../assets/home/trending/house.jpg"
import yacht from "../../../../../assets/home/trending/yacht.jpg"
import jewelry from "../../../../../assets/home/trending/jewelry.jpg"
import watch from "../../../../../assets/home/trending/watch.jpg"
import { BiHeart } from "react-icons/bi";

const trendingItems = [
  { image: house, title: "Real Estate", listings: "52,795 Listings" },
  { image: yacht, title: "Yacht", listings: "32,795 Listings" },
  { image: jewelry, title: "Jewellery", listings: "12,795 Listings" },
  { image: watch, title: "Watch", listings: "9,795 Listings" },
];

const Trending = () => {
  return (
    <section className="py-16 bg-white container">
      <h2 className="text-2xl font-semibold text-gray-800 mb-10">
        Trending <span className="text-[#cba65f]">Now</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6  mx-auto">
        {trendingItems.map((item, index) => (
          <div key={index} className="relative h-72 rounded-lg overflow-hidden shadow-md group">
            <Image
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-between p-3 text-left">
               <div className="flex justify-between">
                <button className="self-start bg-white/20 text-white border border-white px-3 py-1 rounded-md text-sm font-medium backdrop-blur-sm">
                View More
              </button>
              <div>
                <BiHeart size={30} className="text-white" />
              </div> 
               </div>
              <div>
                <h4 className="text-white text-lg font-semibold">{item.title}</h4>
                <p className="text-gray-200 text-sm">{item.listings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
