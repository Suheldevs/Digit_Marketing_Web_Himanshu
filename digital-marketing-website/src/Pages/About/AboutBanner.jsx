import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const AboutBanner = () => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[350px] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/image/banner-bg.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-90"></div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-3xl md:text-5xl font-bold">About Us</h1>
        <div className="mt-4 flex items-center justify-center text-sm md:text-base font-medium">
          <span className="text-pink-300">Home</span>
          <FaAngleDoubleRight className="mx-2 text-white" />
          <span className="text-white">About Us</span>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
