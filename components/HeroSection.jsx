'use client'
import React, { useRef } from 'react'
import { Button } from "./ui/moving-border";
import KeyFeatures from './KeyFeatures';
import { BackgroundLines } from './ui/background-lines';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Accordion from './Accordion';
import Link from 'next/link';

function HeroSection() {
  const keyFeaturesRef = useRef(null);

  const scrollToKeyFeatures = () => {
    keyFeaturesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
            <HoverBorderGradient
             containerClassName="rounded-full"
              as="button"
              onClick={scrollToKeyFeatures}
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-4 px-7">
                Read more
              </HoverBorderGradient>  
          </div>
        </div>
      </div>

    </BackgroundLines>
     

    {/* niche wala card*/}
    <div className="mt-[-240px]" ref={keyFeaturesRef}>
    <KeyFeatures/>
    </div>

    <div>
      <Accordion/>
    </div>

    <div >
      <h3 className="flex justify-center mt-8 text-3xl p-1">
        If you&apos;d like more information about our features, get in touch today.
        </h3>
      <div className="flex justify-center mt-6" >
      <Link href="/contact" className="bg-yellow-400 text-black font-semibold py-3 text-xl px-6 rounded-full hover:bg-yellow-500 ml-2">
          Get in touch
        </Link>  
          </div>

    </div>

    </div>

  
  )
}

export default HeroSection
