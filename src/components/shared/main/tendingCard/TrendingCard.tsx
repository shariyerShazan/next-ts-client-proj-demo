import Image from 'next/image'
import React from 'react'
import { BiHeart } from 'react-icons/bi'
import { TrendingItem } from '../../../../app/(main)/(home)/_components/trending/Trending'


interface TrendingCardProps {
    trendingItems: TrendingItem[];
  }

const TrendingCard : React.FC<TrendingCardProps> = ({trendingItems}) => {
  return (
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
  )
}

export default TrendingCard
