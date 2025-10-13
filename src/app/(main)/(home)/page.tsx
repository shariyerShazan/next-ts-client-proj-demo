import Hero from '@/app/(main)/(home)/_components/hero/Hero'
import React from 'react'
import FeaturedCategory from './_components/featuredCategory/FeaturedCategory'
import Trending from './_components/trending/Trending'

const 
home = () => {
  return (
    <div>
        <Hero />
        <FeaturedCategory />
        <Trending />
    </div>
  )
}

export default 
home