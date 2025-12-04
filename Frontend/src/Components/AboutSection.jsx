// AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import image from '../assets/about.jpg';

const AboutSection = () => {
  return (
    <div className="py-10 mx-auto max-w-7xl  px-4 sm:px-6 md:px-8 lg:px-10  text-gray-800">
      {/* Container for layout control */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Side: Image */}
        <motion.div
          className="lg:w-1/2 flex justify-center lg:justify-start"
        >
          <div className="relative group">
            <img
              src={image}
              alt="About CodeClicks"
              className="relative w-full h-auto max-w-xl rounded-2xl  transition-transform transform hover:scale-105 duration-500"
            />
          </div>
        </motion.div>

        {/* Right Side: Company Description */}
        <motion.div
          className="lg:w-1/2 space-y-8 text-center lg:text-left"
        >
          {/* Badge */}
          {/* <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-5 py-2 rounded-full border border-orange-200 mb-4">
            <span className="text-sm font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              About Us
            </span>
          </div> */}

          <h2 className="text-2xl md:text-3xl  font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent text-start md:text-center lg:text-start leading-tight">
            Transforming Ideas Into Digital Excellence
          </h2>

          <p className="text-gray-700 text-base md:text-base leading-relaxed text-justify lg:text-start">
            <span className="font-semibold text-orange-600">CodeClicks</span> is a leading software development company in Lucknow, specializing in custom web applications, mobile app development, and comprehensive digital solutions. We help businesses accelerate their growth through innovative technology and strategic digital transformation.
          </p>


          <div className="grid gap-4 md:grid-cols-2">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group flex flex-col items-center lg:items-start space-y-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              {/* Orange Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-pink-500 rounded-l-xl"></div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To empower businesses with smart, scalable tech solutions that drive growth and efficiency in a digital-first world.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative group flex flex-col items-center lg:items-start space-y-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
            >
              {/* Orange Accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-pink-500 rounded-l-xl"></div>

              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
              </div>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                To be a leading IT partner, enabling businesses to thrive and innovate in an ever-evolving tech landscape.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
