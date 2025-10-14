import React from 'react'
import Hero from './_components/hero/Hero'
import Trending from './_components/trending/Trending'
import ExploreArea from './_components/ exploreArea copy/ExploreArea'
import PropertyDescription from './_components/description/PropertyDescription'
import ContactAgentCard from './_components/description/ContactAgentCard'


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
              <div className='grid grid-cols-5 mt-12'>
                   <div className='col-span-4'>
                       <PropertyDescription />
                   </div>
                   <div>
                     <ContactAgentCard />
                   </div>
              </div>
            <ExploreArea />
            <Trending />
          </div>
    </section>
  )
}

export default page
