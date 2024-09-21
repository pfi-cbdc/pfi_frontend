'use client'
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const FeatureBox = ({ title, description }) => (
  <div className="feature-box rounded-lg p-4 shadow-sm">
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-600">{title}</h3>
    <p className="text-sm sm:text-base">{description}</p>
  </div>
);

const CreditOfferingFeatures = () => {
  return (
    <div className='max-w-6xl mx-auto pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8'>
      <h1 className="text-3xl sm:text-xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
        Helping creditworthy people to get loan at their ease without raising <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">any risk...</span>
      </h1>
      
      <div className="features-grid grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-3 sm:py-4'>
        <FeatureBox 
          title="Transparency to Lender"
          description="Fully transparent process to lender so they can access their funds usage ledger."
        />
        </BackgroundGradient>

        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-3 sm:py-4'>
        <FeatureBox 
          title="Purposely driven loan"
          description="Predefined loan would be allotted so that genuine people will get the loan with high security."
        />
        </BackgroundGradient>
        
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-3 sm:py-4'>
        <FeatureBox 
          title="Efficiently speedy loan approval"
          description="By using of new gen payment services speedy approval and disbursement of loan to borrowers."
        />
        </BackgroundGradient>
        
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-3 sm:py-4'>
        <FeatureBox 
          title="Affordable loan with no hidden charges"
          description="We provide lower interest rates than the other players and with no hidden charges."
        />
        </BackgroundGradient>
        
      </div>
    </div>
  );
};

export default CreditOfferingFeatures;