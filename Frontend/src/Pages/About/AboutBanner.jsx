import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 mb-6">
            <Link to="/" className="hover:text-orange-600 transition-colors cursor-pointer">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-orange-600">About Us</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-600 to-gray-900 bg-clip-text text-transparent">
            About CodeClicks
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and digital marketers dedicated to transforming businesses through innovative technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
