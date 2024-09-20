import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";
import KeyFeatures from './KeyFeatures';
import { BackgroundLines } from './ui/background-lines';
import { HoverBorderGradient } from './ui/hover-border-gradient';

function HeroSection() {
  return (
    <div>

    <BackgroundLines className='-mb-20'>

    <div className="-mb-30 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0 overflow-hidden">
        <div className="animate-slide-in-left">
          <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 px-2 mb-6">
            Transforming the<br /> digital lending...
          </h1>
          <p className="mt-6 mb-4 pb-6 text-3xl font-normal max-w-lg text-center mx-auto bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500">
            Built on DLT and Smart Contracts
          </p>
          <div className="flex justify-center mt-8">
            <Link href="/solutions">
            <HoverBorderGradient
             containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4 px-7">
                Read more
              </HoverBorderGradient>  
            </Link>
          </div>
        </div>
      </div>

    </BackgroundLines>
     

    {/* niche wala card*/}
    <div className="mt-[-260px]">
    <KeyFeatures/>
    </div>
    </div>

  
  )
}

export default HeroSection
