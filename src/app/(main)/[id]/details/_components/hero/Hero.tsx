import React from "react";
import car1 from "../../../../../../assets/main/detailsPage/car1.jpg";
import car2 from "../../../../../../assets/main/detailsPage/car2.jpg";
import car3 from "../../../../../../assets/main/detailsPage/car3.jpg";
import car4 from "../../../../../../assets/main/detailsPage/car4.jpg";
import car5 from "../../../../../../assets/main/detailsPage/car5.jpg";

import Image from "next/image";

const Hero = () => {
  return (
    <section className=" my-6">
      <div className="flex flex-col gap-4">
        {/* Top Row */}
        <div className="grid  grid-cols-1 sm:grid-cols-10 gap-4">
          <div className=" sm:col-span-6 overflow-hidden group rounded-md">
            <Image
              src={car3}
              alt="car 3"
              className="w-full h-96 object-cover rounded-md group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="sm:col-span-4 overflow-hidden group rounded-md">
            <Image
              src={car4}
              alt="car 4"
              className="w-full h-96 object-cover rounded-md group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 sm:grid-cols-9 gap-4 ">
          <div className="col-span-3 overflow-hidden group rounded-md">
            <Image
              src={car5}
              alt="car 5"
              className="w-full h-72 object-cover rounded-md group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="col-span-3 overflow-hidden group rounded-md">
            <Image
              src={car2}
              alt="car 2"
              className="w-full h-72 object-cover rounded-md group-hover:scale-105 transition-all duration-500"
            />
          </div>
          <div className="col-span-3 overflow-hidden group rounded-md">
            <Image
              src={car1}
              alt="car 1"
              className="w-full h-72 object-cover rounded-md group-hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
