import React from 'react'
import { FaCheck, FaArrowRight, FaUmbrellaBeach, FaPiggyBank, FaPaperPlane, FaProjectDiagram } from 'react-icons/fa';

const services = [
  {
    title: 'Finance & Insurance',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
    icon: <FaPiggyBank size={36} />,
  },
  {
    title: 'Investment Planning',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
    icon: <FaUmbrellaBeach size={36} />,
  },
  {
    title: 'Market Positioning',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
    icon: <FaPaperPlane size={36} />,
  },
  {
    title: 'Business Consulting',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et',
    icon: <FaProjectDiagram size={36} />,
  },
];

export default function Service() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div>
          <h4 className="text-pink-600 font-semibold text-sm uppercase mb-2">Our Services</h4>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">We Offer Exclusive Service For You</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit sed eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad veniam quis nostrud exercitation ullamco laboris nisi
          </p>
          <ul className="text-gray-700 space-y-2 mb-6">
            <li className="flex items-center gap-2"><FaCheck className="text-pink-600" /> Smashing Book 6 Is Here New Frontiers In Web Design</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-600" /> Introduction To Animation And The iMessage App Store With Shruggie</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-600" /> Get Your Mobile Site Ready For The 2018 Holiday ways goods</li>
            <li className="flex items-center gap-2"><FaCheck className="text-pink-600" /> Making Distributed Product Teams Work More Efficiently other</li>
          </ul>
          <button className="bg-pink-500 text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-pink-600">
            View More <FaArrowRight />
          </button>
        </div>

        {/* Right Section */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group bg-pink-50 p-6 rounded-xl cursor-pointer overflow-hidden transition duration-500 hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-400"
            >
              <div className="relative z-10">
                <div className="text-pink-600 group-hover:text-white mb-4 transition duration-300">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-800 group-hover:text-white mb-2">{service.title}</h4>
                <p className="text-sm text-gray-600 group-hover:text-white mb-4">
                  {service.description}
                </p>
                <button className="bg-white group-hover:bg-pink-600 text-pink-500 group-hover:text-white p-2 rounded-full transition duration-300">
                  <FaArrowRight />
                </button>
              </div>

              {/* Hover Background Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition duration-500">
                <img
                  src="src/assets/image/p3.jpg"
                  alt="Hover BG"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
