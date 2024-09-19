import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div>
     <div className=" p-5 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4 px-2 mb-6">
          Transforming the<br /> digital lending...
        </h1>
        <p className="mt-6 text-3xl font-normal max-w-lg text-center mx-auto bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-yellow-500">
          Built on DLT and Smart Contracts
        </p>
        <div className="flex justify-center mt-8">
          <Link href="/solutions">
            <Button
              borderRadius="1.75rem"
              className="bg-black text-white border border-gray-800 px-3 py-1"
            >
              Read more
            </Button>
          </Link>
        </div>

      </div>

    <div>
      
    </div>
    </div>

  
  )
}

export default HeroSection
