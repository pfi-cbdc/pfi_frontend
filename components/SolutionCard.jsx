import React from 'react';
import { motion } from 'framer-motion';

const SolutionCard = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="bg-transparent text-white p-10 md:pl-32 md:ml-14 rounded-lg shadow-lg"
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
    >
      {/* Merchant Loyalty Program Section */}
      <motion.div 
        className="mb-14"
        variants={sectionVariants}
        transition={{ duration: 1.2, delay: 2, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold mb-3 text-yellow-400">Merchant Loyalty Program</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>India&apos;s first acquirer-led merchant loyalty program leveraging the power of programmable CBDCs.</li>
          <li>Offer it as an affordable Value Added Service (VAS) to your merchants increasing merchant retention as well as collections.</li>
        </ul>
      </motion.div>
      
      {/* Corporate Expense Management Section */}
      <motion.div 
        className="mb-14"
        variants={sectionVariants}
        transition={{ duration: 1.2, delay: 2.5, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold mb-3 text-yellow-400">Corporate Expense Management</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Unlock new revenue streams by extending corporate expense management services to your corporate clients through our cutting-edge platform.</li>
          <li>Seamlessly manage and disburse employee benefits as programmable CBDCs.</li>
        </ul>
      </motion.div>
      
      {/* Digital Escrow Section */}
      <motion.div
        variants={sectionVariants}
        transition={{ duration: 1.2, delay: 3, ease: "easeInOut" }}
      >
        <h2 className="text-2xl font-bold mb-3 text-yellow-400">Digital Escrow</h2>
        <ul className="list-disc list-inside space-y-1 text-base">
          <li>Switch to digital escrow powered by smart contracts. Our digital solution is efficient, transparent, and provides real-time settlements.</li>
          <li>Funds in the form of CBDCs are locked in smart contracts and are automatically released based on conditions defined.</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default SolutionCard;
