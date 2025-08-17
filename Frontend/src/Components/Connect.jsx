// CTA SECTION

import React from "react";
// import { ArrowRight } from "lucide-react";

const Connect = () => {
  return (
    <section className=" mb-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white py-12 px-6 rounded-lg mx-4 md:mx-10 mt-10 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Build Your Business
          </h2>
          <p className="text-sm md:text-base text-white/90 max-w-md">
            Grow your brand with powerful digital marketing strategies that
            deliver results – SEO, PPC, Social Media, and more.
          </p>
        </div>
        <div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-pink-400 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300"
          >
            Contact Us
            {/* <ArrowRight className="w-4 h-4" /> */}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Connect;

// CTA SECTION
