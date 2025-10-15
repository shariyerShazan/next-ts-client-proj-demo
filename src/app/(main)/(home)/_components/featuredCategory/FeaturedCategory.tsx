import Link from "next/link";
import React from "react";
import { FaBuilding, FaCar, FaShip, FaClock, FaGem } from "react-icons/fa";

const FeaturedCategory = () => {
  const categories = [
    { icon: <FaBuilding size={24} />, title: "Real Estate", subtitle: "52,795 Listings" },
    { icon: <FaCar size={24} />, title: "Car", subtitle: "10+ Brands" },
    { icon: <FaShip size={24} />, title: "Yacht", subtitle: "50+ Brands" },
    { icon: <FaClock size={24} />, title: "Watch", subtitle: "10+ Brands" },
    { icon: <FaGem size={24} />, title: "Jewellery", subtitle: "3K+ Design" },
  ];

  return (
    <section className="py-16 bg-white text- container"> 
      <h2 className="text-2xl font-semibold text-gray-800 mb-10 ">
        Featured <span className="text-[#cba65f]">Categories</span>
      </h2>
   <Link href={`1/details`} >
     <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-5 justify-center gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="h-64 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#fdf8f1]"
          >
            <div className="text-[#cba65f]">{cat.icon}</div>
            <h4 className="font-semibold text-gray-700">{cat.title}</h4>
            <p className="text-sm text-gray-500">{cat.subtitle}</p>
          </div>
        ))}
      </div>
   </Link>
    </section>
  );
};

export default FeaturedCategory;
