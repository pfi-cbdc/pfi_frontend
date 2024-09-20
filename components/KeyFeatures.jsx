'use client'
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const FeatureBox = ({ title, description }) => (
  <div className="feature-box rounded-lg p-4 shadow-sm ">
    <h3 className="text-2xl font-semibold mb-2 text-yellow-600">{title}</h3>
    <p>{description}</p>
  </div>
);

const CreditOfferingFeatures = () => {
  return (
    <div className="credit-offering-container max-w-6xl mx-auto pb-10 pl-4 pr-8">
      <h1 className="text-4xl font-bold  bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 pb-4 mb-8 -mt-20 border-b border-zinc-900">
      Helping creditworthy people to get loan at their ease without raising any risk...
      </h1>
      
      <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-6">
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-4'>
        <FeatureBox 
          title="Transparency to Lender"
          description="Fully transparent process to lender so they can access their funds usage ledger."
        />
        </BackgroundGradient>

        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-4'>
        <FeatureBox 
          title="Purposely driven loan"
          description="Predefined loan would be allotted so that genuine people will get the loan with high security."
        />
        </BackgroundGradient>
        
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-4'>
        <FeatureBox 
          title="Efficiently speedy loan approval"
          description="By using of new gen payment services speedy approval and disbursement of loan to borrowers."
        />
        </BackgroundGradient>
        
        <BackgroundGradient className='rounded-[22px] bg-zinc-900 overflow-hidden py-4'>
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