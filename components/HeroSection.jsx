'use client'
import React, { useRef, useEffect } from 'react'
import { Button } from "./ui/moving-border";
import KeyFeatures from './KeyFeatures';
import { BackgroundLines } from './ui/background-lines';
import { HoverBorderGradient } from './ui/hover-border-gradient';
import Accordion from './Accordion';
import Link from 'next/link';
import { motion } from 'framer-motion';

function HeroSection() {
  const keyFeaturesRef = useRef(null);

  const scrollToKeyFeatures = () => {
    keyFeaturesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="py-8 sm:py-16 md:py-24"
        initial="hidden"
        animate="visible"
        variants={slideInFromLeft}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-3xl pb-2 sm:text-4xl md:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
            variants={slideInFromLeft}
            transition={{ delay: 0.2 }}
          >
            Transforming the<br className="hidden sm:inline" />digital lending...
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-8 text-yellow-600"
            variants={slideInFromLeft}
            transition={{ delay: 0.4 }}
          >
            Built on DLT and Smart Contracts
          </motion.p>
          <motion.div 
            className="mb-8 sm:mb-12 flex justify-center"
            variants={slideInFromLeft}
            transition={{ delay: 0.6 }}
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              onClick={scrollToKeyFeatures}
              className="px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-semibold text-white bg-zinc-950 hover:bg-yellow-600 transition duration-300"
            >
              Read more
            </HoverBorderGradient>  
          </motion.div>
        </div>
      </motion.div>
     
      <motion.div 
        ref={keyFeaturesRef} 
        className="py-1 sm:py-8 md:py-4"
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <KeyFeatures/>
      </motion.div>

      <motion.div 
        className="py-8 sm:py-16 md:py-16 bg-zinc-950"
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl pl-24 sm:text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text"
          variants={slideInFromLeft}
        >
          About us
        </motion.h2>
        <Accordion/>
      </motion.div>

      <motion.div 
        className="py-12 sm:py-16 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        variants={slideInFromLeft}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h3 
          className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 sm:mb-8 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text"
          variants={slideInFromLeft}
        >
          If you&apos;d like more information about our features, get in touch today.
        </motion.h3>
        <motion.div variants={slideInFromLeft}>
          <Link href="/contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-zinc-900 rounded-full hover:bg-yellow-600 transition duration-300 border border-slate-500">
            <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Get in touch</span>
          </Link>  
        </motion.div>
      </motion.div>
    </div>
  )
}

export default HeroSection
