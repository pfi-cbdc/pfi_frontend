'use client'

import TeamCard from '../../components/TeamCard'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Page = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='pt-21'>
      <div>
      <Image
        src="/images/about.jpg"
        alt="About background"
        width={1600}
        height={600}
        objectFit="none"
        quality={100}
        className="mx-auto w-4/5"
        // priority
      />
      </div>

      <div className='bg-gray-950 p-4 ml-5 mr-5 -mt-6'>
        <h1 className={`text-white text-3xl mt-10 pl-15 ml-10 p-5 transition-transform duration-1000 ease-out ${showContent ? 'translate-x-0' : '-translate-x-full'}`}>Our team</h1>
        <div className={`flex justify-center items-center mb-5 p-4 transition-transform duration-1000 ease-out ${showContent ? 'translate-x-0' : '-translate-x-full'}`}>
          <TeamCard />
        </div>
      </div>
    </div>
  )
}

export default Page
