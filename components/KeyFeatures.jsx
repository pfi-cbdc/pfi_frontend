'use client'
import React from 'react';
import { BackgroundGradient } from './ui/background-gradient';

const FeatureBox = ({ title, description }) => (
  <div className="feature-box rounded-lg p-4 shadow-sm border-b border-l border-gray-700">
    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-yellow-600">{title}</h3>
    <p className="text-sm sm:text-base">{description}</p>
  </div>
);

const CreditOfferingFeatures = () => {
  return (
    <div className='max-w-7xl mx-auto pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8'>
      <h2 className="text-xl sm:text-xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
        Helping creditworthy people to get loan at their ease without raising <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-transparent bg-clip-text">any risk</span>
      </h2>
      
      <div className="features-column mt-4 pt-2 flex flex-col gap-6 sm:gap-8">
        <FeatureBox 
          title="Transparency to Lender"
          description="Fully transparent process to lender so they can access their funds usage ledger."
        />

        
        <FeatureBox 
          title="Purposely driven loan"
          description="Predefined loan would be allotted so that genuine people will get the loan with high security."
        />
        <FeatureBox 
          title="Efficiently speedy loan approval"
          description="By using of new gen payment services speedy approval and disbursement of loan to borrowers."
        />
        
        <FeatureBox 
          title="Affordable loan with no hidden charges"
          description="We provide lower interest rates than the other players and with no hidden charges."
        />
        
      </div>
    </div>
  );
};

export default CreditOfferingFeatures;