import React from "react";
import Image from "next/image";
import articleImg from "../../../../../assets/main/home/article&withUs/article.jpg"
// import { BiRightArrow } from "react-icons/bi";
// import { ArrowBigRight } from "lucide-react";
import { IoIosArrowRoundForward } from "react-icons/io";

const articles = [
  {
    image: articleImg,
    title: "Housing Markets That Changed the Most This Week",
    category: "Apartment",
    date: "March 19, 2024",
  },
  {
    image: articleImg,
    title: "Housing Markets That Changed the Most This Week",
    category: "Apartment",
    date: "March 19, 2024",
  },
  {
    image: articleImg,
    title: "Housing Markets That Changed the Most This Week",
    category: "Apartment",
    date: "March 19, 2024",
  },
];

const RecentArticle = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-xl md:text-2xl text-center  font-semibold text-[#b59b58] mb-10">
          Recent Articles & News
        </h2>

        {/* Articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {articles.map((item, index) => (
            <div
              key={index}
              className="rounded-lg  transition"
            >
              <div className="relative rounded-lg overflow-hidden  group">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-72 group-hover:scale-105 transition-transform duration-500 rounded-lg "
                />
                <div className=" hidden group-hover:block">
                    <button className="absolute top-3 flex gap-1  items-center left-3 bg-[#cba65f] text-white text-xs px-3 py-1 rounded-md shadow">
                  Read More
                  <IoIosArrowRoundForward size={25} />
                </button>
                </div>
              </div>
              <div className="p-4 text-left">
                  <div className="flex justify-between items-center">
                     <p className="text-sm text-[#b59b58] font-medium">
                         {item.category}
                     </p>
                     <p className="text-gray-400 text-sm mt-2">{item.date}</p>
                  </div>
                <p className="text-gray-700 font-semibold text-base leading-snug mt-1">
                  {item.title}
                </p>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentArticle;
