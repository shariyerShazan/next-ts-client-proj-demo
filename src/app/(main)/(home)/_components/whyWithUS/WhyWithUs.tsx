import React from "react";
import Image from "next/image";
import building1 from "../../../../../assets/home/article&withUs/buildingOne.jpg";
import building2 from "../../../../../assets/home/article&withUs/buildingTwo.jpg";
import frame from "../../../../../assets/home/article&withUs/frameU.png";
import { FaBuilding, FaUsers, FaCheckCircle } from "react-icons/fa";

const WhyWithUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Images */}
        <div className="grid grid-cols-13 gap-4">
           <div className="flex flex-col items-end gap-4  col-span-6">
                <Image
                    src={building1}
                    alt="Building 1"
                    className="rounded-xl object-cover w-full h-60 md:h-72"
                />
                <div className="bg-[#cba65f] text-white rounded-xl p-6 flex flex-col justify-center  shadow w-[70%] h[70%]">
                      <Image
                        src={frame}
                        alt="frame 1"
                        className="rounded-xl object-cover w-10 h-10 md:h-10"
                       />
                       <p className="text-sm">Properties for Sale</p>
                    <h3 className="text-xl font-bold">14k+</h3>
                </div>
           </div>
            
          <div className="flex justify-end h-full col-span-7">
            <Image
              src={building2}
              alt="Building 2"
              className="rounded-xl object-cover w-full h-[90%]  md:h-[90%] mt-[30%]"
            />
   
          </div>
        </div>

        {/* Right Text */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            Why You Should Work <br /> With Us
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Learn from a variety of property and get inspired to easily find
            your dream home.
          </p>

          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <FaCheckCircle className="text-[#cba65f]" />
              <span>100% Secure</span>
            </li>
            <li className="flex items-center gap-3">
              <FaBuilding className="text-[#cba65f]" />
              <span>Wide Range of Properties</span>
            </li>
            <li className="flex items-center gap-3">
              <FaUsers className="text-[#cba65f]" />
              <span>Trusted by Thousands</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyWithUs;
