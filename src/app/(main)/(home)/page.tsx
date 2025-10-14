import Hero from '@/app/(main)/(home)/_components/hero/Hero'
import React from 'react'
import FeaturedCategory from './_components/featuredCategory/FeaturedCategory'
import Trending from './_components/trending/Trending'
import RecentArticle from './_components/recentArticle/RecentAtricle'
import WhyWithUs from './_components/whyWithUS/WhyWithUs'
import ExclusivePropertiy from './_components/exclusiveSection/ExclusivePropertiy'
import TestimonialsAndCta from './_components/testimonialsAndCta/TestimonialsAndCta'

const 
home = () => {
  return (
    <div>
        <Hero />
        <FeaturedCategory />
        <Trending />
        <ExclusivePropertiy />
          <RecentArticle />
          <WhyWithUs />
          <TestimonialsAndCta />
    </div>
  )
}

export default 
home