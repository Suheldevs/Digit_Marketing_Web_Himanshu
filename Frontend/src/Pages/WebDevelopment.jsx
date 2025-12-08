import React from 'react'
import ServicesDisplay from '../Components/ServiceDisplay';
import { FaCheck, FaAngleDoubleRight } from "react-icons/fa";

const WebDevelopment = () => {
  return (
    <>
      <section
        className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/image/banner-bg.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-90"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Our Services</h1>
          <div className="mt-4 flex items-center justify-center text-sm md:text-base font-medium">
            <span className="text-orange-200">Home</span>
            <FaAngleDoubleRight className="mx-2 text-white" />
            <span className="text-white">Our Services</span>
          </div>
        </div>
      </section>
      <ServicesDisplay />
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2">
            {/* <img src={image} alt="About Illustration" className="w-full h-auto" /> */}
            <img src="src/assets/image/p2.jpg" alt="illurtration" />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-orange-500 uppercase font-semibold tracking-widest mb-2">
              About Us
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
              Exclusive Agency To <br /> Provide Solution
            </h2>
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo.
            </p>

            <ul className="text-left text-gray-800 space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <FaCheck className="text-orange-500 mt-1" />
                <span>Smashing Book 6 Is Here New Frontiers In Web Design</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-orange-500 mt-1" />
                <span>
                  Introduction To Animation And The iMessage App Store With
                  Shruggie
                </span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-orange-500 mt-1" />
                <span>Get Your Mobile Site Ready For The 2018 Holiday ways goods</span>
              </li>
              <li className="flex items-start gap-2">
                <FaCheck className="text-orange-500 mt-1" />
                <span>
                  Making Distributed Product Teams Work More Efficiently other
                </span>
              </li>
            </ul>

            <button className="flex items-center gap-2 px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition">
              Read More <FaAngleDoubleRight />
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default WebDevelopment
