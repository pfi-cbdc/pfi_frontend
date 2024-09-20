import React from 'react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'John Doe',
    position: 'Team Leader',
    imageUrl: '/images/v2.png', 
  },
  {
    name: 'Jane Smith',
    position: 'Developer',
    imageUrl: '/images/v2.png', 
  },
  {
    name: 'Michael Johnson',
    position: 'Designer',
    imageUrl: '/images/v2.png',
  },
  {
    name: 'Emily Davis',
    position: 'QA Engineer',
    imageUrl: '/images/v2.png', 
  },
];

const TeamCard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="bg-zinc-900 shadow-lg rounded-lg overflow-hidden border-b border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-52 mx-auto"
        >
          <div className="relative h-48 w-full">
            <Image
              src={member.imageUrl}
              alt={member.name}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-300 hover:opacity-80"
            />
          </div>
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold text-gray-200 mb-2">{member.name}</h2>
            <p className="text-gray-400 text-sm">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
