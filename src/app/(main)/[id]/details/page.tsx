import React from 'react'
import Hero from './_components/hero/Hero'
import Trending from './_components/trending/Trending'
import ExploreArea from './_components/ exploreArea copy/ExploreArea'


const page = () => {
  return (
    <section className='mt-[7%]'>
          <div className='container'>
              <ul className='text-sm text-[#cba65f] flex justify-between'>
                  <li className=' list-disc'>Listed by JENELLE BEZDEK</li>
                  <li className=' list-disc'>Brokered by SUPREME REALTY GROUP</li>
              </ul>
          </div>
          <div className='my-6 container'>
            <Hero />
            <ExploreArea />
            <Trending />
          </div>
    </section>
  )
}

export default page
