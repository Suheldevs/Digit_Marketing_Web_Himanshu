import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import Modal from './Modal';
import { Link } from 'react-router-dom';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const animatedWords = ['Web Development', 'App Development', 'Digital Marketing', 'SEO & Growth', 'Graphic Design'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect logic
  useEffect(() => {
    const current = currentWord % animatedWords.length;
    const fullText = animatedWords[current];

    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(100);
      } else {
        // Typing text
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(150);
      }

      // Check if typing is complete
      if (!isDeleting && displayText === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWord((prev) => (prev + 1) % animatedWords.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord, typingSpeed, animatedWords]);

  const serviceLinks = [
    { name: 'Web Dev', path: '/services/web-development' },
    { name: 'App Dev', path: '/services/app-development' },
    { name: 'Marketing', path: '/services/digital-marketing' },
    { name: 'SEO', path: '/services/seo' },
    { name: 'Design', path: '/services/graphic-design' }
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Gradient Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-orange-50 to-transparent opacity-60 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-blue-50 to-transparent opacity-60 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <div className="flex flex-col items-center justify-center min-h-[85vh] text-center space-y-6">

          {/* Badge */}
          {/* <div className={`inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-200 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Full-Service Digital Agency</span>
          </div> */}

          {/* Main Heading */}
          <div className="space-y-6 max-w-4xl">
            <h1 className={`text-6xl lg:text-7xl font-bold leading-tight transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
              <span className="text-gray-900">
                Transform Your Business with
              </span>
            </h1>

            {/* Animated Words with Typing Effect */}
            <div className="h-20 lg:h-24 flex items-center justify-center">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent min-h-[4rem] flex items-center justify-center">
                {displayText}
                <span className="ml-1 w-1 h-12 bg-orange-500 animate-pulse">|</span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <p className={`text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            We craft exceptional digital experiences through web & app development, strategic marketing, SEO optimization, and stunning design.
          </p>

          {/* CTA Buttons - Enhanced Styling */}
          <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-2 rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span>Start Your Project</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <Link
              to="/project"
              className="group relative border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold hover:border-gray-800 hover:text-gray-900 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-sm hover:shadow-md flex items-center justify-center"
            >
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Services Grid */}
          <div className={`grid grid-cols-2 lg:grid-cols-5 gap-4 pt-4 w-full max-w-4xl transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
            {serviceLinks.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white border border-gray-200 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white hover:border-orange-500 transition-all duration-300 cursor-pointer transform hover:scale-105 shadow-sm hover:shadow-lg flex items-center justify-center"
              >
                {service.name}
              </Link>
            ))}
          </div>

        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}

export default Hero;