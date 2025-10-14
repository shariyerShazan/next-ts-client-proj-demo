"use client";
import React from "react";
import {
  FaHome,
  FaClock,
  FaEye,
  FaBookmark,
} from "react-icons/fa";

const PropertyDescription = () => {
  const features = [
    "Garden",
    "Pool",
    "Gym",
    "Indoor Pool",
    "Ocean View",
    "Helipad",
    "Cinema",
    "Tennis Court",
    "Fireplace",
    "Outdoor Kitchen",
  ];

  return (
    <section className="w-full px-6 md:px-16 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Title and price */}
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2">
          Beacon Of Luxury Within The Country's Priciest Zip Code
        </h1>

        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          $55,000,000
        </h2>

        {/* Property Stats */}
        <div className="text-gray-700 flex flex-wrap gap-x-4 mb-4">
          <span>9 Beds</span>
          <span>·</span>
          <span>15 Baths</span>
          <span>·</span>
          <span>1,434 sqm</span>
          <span>·</span>
          <span>$38,355/sqm</span>
        </div>

        {/* Listing Info */}
        <div className="text-sm text-gray-500 flex flex-wrap items-center gap-x-4 mb-8">
          <div className="flex items-center gap-1">
            <FaClock className="text-gray-500" /> 
            <span>Last updated: May 22, 2025</span>
          </div>
          <div className="flex items-center gap-1">
            <FaEye className="text-gray-500" /> 
            <span>Views 1,833</span>
          </div>
          <div className="flex items-center gap-1">
            <FaBookmark className="text-gray-500" /> 
            <span>Saves 129</span>
          </div>
          <span>·</span>
          <span className="font-medium">ID: RF651011</span>
        </div>

        {/* Features */}
        <h3 className="text-2xl font-semibold text-[#B38A37] mb-4">
          Features
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center p-4 border border-gray-300 rounded-lg hover:shadow-md transition"
            >
              <div className="bg-[#CDAE66] text-white p-3 rounded-full mb-2">
                <FaHome size={22} />
              </div>
              <span className="text-gray-800 font-medium">{feature}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed">
          Bold without Compromise, The Atherton stands as a beacon of luxury
          within one of the most unique enclaves in the world. Rare and
          breathtaking. Comfortable and yet Sexy. This home is crafted with some
          of the best-in-class finishes throughout and built specifically for
          those who expect more. Artesian hand-painted doors, a 30’ custom Bocci
          chandelier and one-of-a-kind CinemaTech home theater. The home...
        </p>
      </div>
    </section>
  );
};

export default PropertyDescription;
