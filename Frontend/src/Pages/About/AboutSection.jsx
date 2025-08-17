import React from "react";
import { FaCheck, FaAngleDoubleRight } from "react-icons/fa";
// import image from "image/p3.jpg"; // Replace with your own image path

const AboutSection = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2">
          {/* <img src={image} alt="About Illustration" className="w-full h-auto" /> */}
          <img src="src/assets/image/p1.jpg" alt="illurtration" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-pink-500 uppercase font-semibold tracking-widest mb-2">
            About Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Innovative Web Development Agency
          </h2>
          <p className="text-gray-600 mb-6">
          We Build Fast, Secure, and Scalable Digital Experiences

At DigitalMarketing, we specialize in delivering customized web development solutions tailored to meet the unique needs of startups, small businesses, and enterprises. With a blend of creativity, technology, and strategic thinking, our team transforms ideas into powerful websites that perform.
          </p>

          <ul className="text-left text-gray-800 space-y-3 mb-8">
            <li className="flex items-start gap-2">
              <FaCheck className="text-pink-500 mt-1" />
              <span>Smashing Book 6 Is Here New Frontiers In Web Design</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-pink-500 mt-1" />
              <span>
                Introduction To Animation And The iMessage App Store With
                Shruggie
              </span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-pink-500 mt-1" />
              <span>Get Your Mobile Site Ready For The 2018 Holiday ways goods</span>
            </li>
            <li className="flex items-start gap-2">
              <FaCheck className="text-pink-500 mt-1" />
              <span>
                Making Distributed Product Teams Work More Efficiently other
              </span>
            </li>
          </ul>

          <button className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition">
            Read More <FaAngleDoubleRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
