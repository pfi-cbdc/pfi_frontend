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
    { title: 'Accordion 1', content: 'Description for Accordion 1' },
    { title: 'Accordion 2', content: 'Description for Accordion 2' },
    { title: 'Accordion 3', content: 'Description for Accordion 3' },
    { title: 'Accordion 4', content: 'Description for Accordion 4' },
  ];

  return (
    <div className="w-full sm:w-11/12 md:w-4/5 mx-auto mt-4 sm:mt-6 md:mt-8 bg-zinc-950 p-3 sm:p-4 md:p-6 rounded-lg">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
