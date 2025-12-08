import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Mail, Phone } from 'lucide-react';
import Modal from './Modal'; // Import your modal component

const CTASection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Full Width CTA Section */}
      <section className="relative w-full py-10 px-4 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-neutral-950 "></div>

        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30 mb-6">
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-semibold text-white">
                  Let's Work Together
                </span>
              </div>

              {/* Heading */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to Transform Your
                <br />
                <span className="text-orange-500">Digital Presence?</span>
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0">
                Partner with CodeClicks to bring your vision to life. Get a free consultation and discover how we can accelerate your business growth.
              </p>

              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto lg:mx-0">
                {[
                  'Free Consultation',
                  '24/7 Support',
                  'Expert Team',
                  'Proven Results'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white">
                    <CheckCircle className="w-5 h-5 text-orange-100 flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group bg-white text-orange-600 px-6 py-3 cursor-pointer rounded-full font-bold text-lg hover:bg-orange-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <a
                  href="tel:+918318159403"
                  className="group border-2 border-white text-white px-6 py-3 rounded-full font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Us Now</span>
                </a>
              </div>
            </div>

            {/* Right Content - Stats/Info Cards */}
            <div className="flex-shrink-0 lg:w-auto">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { number: '20+', label: 'Projects Completed' },
                  { number: '98%', label: 'Client Satisfaction' },
                  { number: '10+', label: 'Team Members' },
                  { number: '24/7', label: 'Support Available' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-white/80 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.05); }
          }
          
          .animate-pulse {
            animation: pulse 3s ease-in-out infinite;
          }
          
          .delay-700 {
            animation-delay: 700ms;
          }
        `}</style>
      </section>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default CTASection;
