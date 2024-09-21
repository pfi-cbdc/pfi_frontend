'use client'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Install react-icons for arrow icons

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-zinc-700 mb-2 sm:mb-3 md:mb-4">
      <div 
        className="flex justify-between items-center cursor-pointer p-2 sm:p-3 md:p-4 bg-zinc-900 text-white"
        onClick={toggleAccordion}
      >
        <h3 className="text-yellow-700 text-sm sm:text-base md:text-lg">{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && <div className="p-2 sm:p-3 md:p-4 bg-zinc-900 text-slate-300 text-sm sm:text-base">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const items = [
    { title: 'What is PFi?', 
      content: 'PFi is a decentralized peer-to-peer (P2P) lending and borrowing platform using blockchain and CBDC (e-RUPI). It connects lenders and borrowers directly, automating transactions through smart contracts for faster, secure, and transparent lending.' },
    { title: 'How does PFi ensure security?', 
      content: 'PFi uses Hyperledger-based blockchain and smart contracts to secure transactions. Escrow services, digital payments via e-RUPI, and a decentralized reputation system create trust between lenders and borrowers.' },
    { title: 'What are the benefits of PFi?', 
      content: 'PFi offers lower fees, faster processing, and broader access to lending without intermediaries. With blockchain and CBDC integration, it ensures transparency, security, and greater financial inclusion.' },
    { title: 'How does PFi reduce loan defaults?', 
      content: 'PFi uses smart contracts, automated payments, and risk assessment to enforce loan terms, reducing defaults and Non-Performing Assets (NPAs) through secure and transparent blockchain technology.' },
  ];

  return (
    <div className="w-full sm:w-11/12 md:w-4/5 mx-auto mt-4 sm:mt-6 md:mt-8 bg-zinc-950 p-2 sm:p-4 md:p-4 rounded-lg">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
