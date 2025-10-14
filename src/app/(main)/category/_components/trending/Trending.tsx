import React from 'react'
import home from "../../../../../assets/main/category/house.jpg"
import TrendingCard from './TrendingCard';

export interface TrendingItemC {
    image: any; 
    price: string;
    text: string;
  }
  
  const trendingItems : TrendingItemC[] = [
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },
    { image: home, price: "$130,350", text: "2025 Land Rover Range Rover" },

  ];

const Trending = () => {

    
  return (
    <section>
          <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-10">
                 Trending <span className="text-[#cba65f]">Now</span>
              </h2>
           </div>
           <div >
               <TrendingCard trendingItems={trendingItems} />
           </div>
              
    </section>
  )
}

export default Trending
