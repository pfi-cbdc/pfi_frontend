'use client'
import React from 'react'
import Link from 'next/link'
import SolutionCard from '../../components/SolutionCard'
import { motion } from 'framer-motion'

function Page() {
  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white p-8 pt-24 mt-14 items-center'>
      <div className='max-w-6xl mx-auto p-6 md:flex-row items-center justify-between gap-8'>
        <motion.div 
          className='md:w-1/2'
          initial="hidden"
          animate="visible"
          variants={slideUpVariant}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <motion.h1 
            className='text-5xl md:text-6xl font-bold mb-4'
            variants={slideUpVariant}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          >
            <motion.span 
              className='text-yellow-600'
              variants={slideUpVariant}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
            >
              Industry-First
            </motion.span><br />
            <motion.span 
              variants={slideUpVariant}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
            >
              Programmable CBDC
            </motion.span><br />
            <motion.span 
              variants={slideUpVariant}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
            >
              Solutions
            </motion.span>
          </motion.h1>
          <motion.p 
            className='mb-6 text-lg'
            variants={slideUpVariant}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1 }}
          >
            Discover our innovative CBDC solutions that redefine the way
            governments, financial institutions, and businesses embrace the
            transformative power of digital currencies.
          </motion.p>
          <motion.div 
            variants={slideUpVariant}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.2 }}
          >
            <Link href="/contact">
              <button className='bg-yellow-600 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors'>
                Book a Demo
              </button>
            </Link>
          </motion.div>
        </motion.div>
        <div className='md:w-1/2'>
        </div>
      </div>

      <div className='mt-20'>
        <SolutionCard />
      </div>

    </div>
  )
}

export default Page