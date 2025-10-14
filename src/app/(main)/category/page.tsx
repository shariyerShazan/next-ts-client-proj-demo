import React from 'react'
import Hero from './_components/hero/Hero'

const page = () => {
  return (
    <section className='mt-[7%] container'>
          <div>
              <ul className='text-sm text-[#cba65f] flex justify-between'>
                  <li className=' list-disc'>Listed by JENELLE BEZDEK</li>
                  <li className=' list-disc'>Brokered by SUPREME REALTY GROUP</li>
              </ul>
          </div>
          <div>
            <Hero />
          </div>
    </section>
  )
}

export default page
