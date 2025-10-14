import React from "react";
import Image from "next/image";
import userImg from "./../../../../../assets/main/home/testimonial/userF.png"; 
import homeImage1 from "./../../../../../assets/main/home/testimonial/homeIcon1.png"; 
import homeImage2 from "./../../../../../assets/main/home/testimonial/homeIcon2.png"; 

import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { HiMiniArrowRight } from "react-icons/hi2";

const TestimonialsAndCta = () => {
  return (
    <section className="w-full">
      <div className="bg-[#cba65f] text-white py-16 px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center container">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              What our customers are saying us?
            </h2>
            <p className="text-white/90 mb-8 max-w-md">
              Various versions have evolved over the years, sometimes by
              accident, sometimes on purpose injected humour and the like.
            </p>

            <div className="flex gap-10 text-white">
              <div>
                <p className="text-2xl font-bold">10m+</p>
                <p className="text-sm opacity-90">Happy People</p>
              </div>
              <div>
                <p className="text-2xl font-bold">4.88</p>
                <p className="text-sm opacity-90">Overall rating</p>
                <div className="flex text-yellow-200 mt-1">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
           
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3">
                    <Image
                        src={userImg}
                        alt="user"
                        className="w-16 h-16 rounded-full object-cover"
                     />
                      <div>
                            <h4 className="text-lg font-semibold">Cameron Williamson</h4>
                            <p className="text-sm text-white/90 mb-3">Designer</p>
                      </div>
               </div>
              <p className="text-white/90 max-w-md">
                Searches for multiplexes, property comparisons, and the loan
                estimator. Works great. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
              {/* Arrows */}
              <div className="flex gap-3 mt-4">
                <button className="border border-white/60 text-white rounded-full py-1 px-3 hover:bg-white hover:text-[#cba65f] transition">
                  <RiArrowLeftSLine size={20}/>
                </button>
                <button className="border border-white/60 text-white rounded-full py-1 px-3 hover:bg-white hover:text-[#cba65f] transition">
                  <RiArrowRightSLine size={20}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------- CTA Section ---------------- */}
      <div className="py-20 px-6 md:px-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 container">
          {/* Card 1 */}
          <div className="bg-gray-50 rounded-2xl px-8 py-12 flex justify-between items-end shadow-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Looking for the new home?
              </h3>
              <p className="text-gray-600 mb-4 text-sm max-w-sm">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className="bg-[#cba65f] w-38 hover:bg-[#b8964a] text-white px-5 py-2 rounded-md text-sm flex items-center gap-1 transition">
                Get Started <HiMiniArrowRight  />
              </button>
            </div>
            <Image
              src={homeImage1}
              alt="House"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#fff7f3] rounded-2xl px-8 py-12 flex justify-between items-end shadow-sm">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Want to sell your home?
              </h3>
              <p className="text-gray-600 mb-4 text-sm max-w-sm">
                10 new offers every day. 350 offers on site, trusted by a
                community of thousands of users.
              </p>
              <button className="bg-[#cba65f] w-38 hover:bg-[#b8964a] text-white px-5 py-2 rounded-md text-sm flex items-center gap-1 transition">
                Get Started <HiMiniArrowRight  />
              </button>
            </div>
            <Image
              src={homeImage2}
              alt="House"
              width={100}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndCta;
