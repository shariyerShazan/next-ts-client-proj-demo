import React from "react";
import Image from "next/image";

import house from "../../../../../assets/home/trending/house.jpg"
import yacht from "../../../../../assets/home/trending/yacht.jpg"
import jewelry from "../../../../../assets/home/trending/jewelry.jpg"
import watch from "../../../../../assets/home/trending/watch.jpg"
import { BiHeart } from "react-icons/bi";
import TrendingCard from "./TrendingCard";


export interface TrendingItem {
  image: any; 
  title: string;
  listings: string;
}

const trendingItems : TrendingItem[] = [
  { image: house, title: "Real Estate", listings: "52,795 Listings" },
  { image: yacht, title: "Yacht", listings: "32,795 Listings" },
  { image: jewelry, title: "Jewellery", listings: "12,795 Listings" },
  { image: watch, title: "Watch", listings: "9,795 Listings" },
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
        <TrendingCard trendingItems={trendingItems} />
      </div>
    </section>
  );
};

export default Trending;
