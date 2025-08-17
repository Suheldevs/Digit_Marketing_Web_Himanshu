import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award, Sparkles } from 'lucide-react';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const animatedWords = ['Digital Marketing', 'SEO Strategy', 'Brand Growth', 'Online Success'];

  useEffect(() => {
    setIsVisible(true);
    
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % animatedWords.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-orange-200 to-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-float opacity-60`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${i * 1000}ms`,
            animationDuration: `${3000 + Math.random() * 2000}ms`
          }}
        ></div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className={`inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 px-4 py-2 rounded-full border border-orange-200 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Award className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Award-Winning Digital Agency</span>
              <Sparkles className="w-4 h-4 text-pink-500" />
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className={`text-5xl font-bold leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Grow Your Business with
                </span>
              </h1>
              
              {/* Animated Words */}
              <div className="h-20 lg:h-24 overflow-hidden">
                <div 
                  className="transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateY(-${currentWord * 100}%)` }}
                >
                  {animatedWords.map((word, index) => (
                    <h2 
                      key={index} 
                      className="text-5xl  font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent h-20 lg:h-24 flex items-center"
                    >
                      {word}
                    </h2>
                  ))}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-xl text-gray-600 leading-relaxed max-w-lg transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              We help startups, small businesses, and brands succeed online with cutting-edge SEO, Google Ads, social media strategies & more.
            </p>

            {/* Stats */}
            <div className={`grid grid-cols-3 gap-6 py-6 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              {[
                { number: '500+', label: 'Projects Delivered' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '5+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <button className="group bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <button className="group flex items-center justify-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-all duration-300">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className={`flex items-center space-x-4 pt-6 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="text-sm text-gray-500">Trusted by:</span>
              <div className="flex items-center space-x-6">
                {['Google Partner', 'Facebook Blueprint', 'HubSpot Certified'].map((cert, index) => (
                  <div key={index} className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors duration-300">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Interactive */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div 
              className="relative group cursor-pointer"
              onMouseMove={handleMouseMove}
            >
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
                
                {/* Glowing Effect */}
                <div 
                  className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-pink-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.15) 0%, transparent 50%)`
                  }}
                ></div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:-rotate-12 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>

                {/* Main Illustration Placeholder */}
                <div className="relative z-10 bg-gradient-to-br from-orange-100 to-pink-100 rounded-2xl p-12 text-center">
                  <div className="w-64 h-64 mx-auto bg-gradient-to-br from-orange-200 to-pink-200 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Animated Rings */}
                    <div className="absolute inset-0 border-4 border-orange-300 rounded-full animate-ping opacity-20"></div>
                    <div className="absolute inset-4 border-4 border-pink-300 rounded-full animate-ping opacity-20" style={{ animationDelay: '1s' }}></div>
                    
                    {/* Center Icon */}
                    <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                      <TrendingUp className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <div className="text-lg font-semibold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                      Digital Growth Analytics
                    </div>
                    <div className="text-sm text-gray-600">
                      Real-time performance tracking
                    </div>
                  </div>
                </div>

                {/* Floating Data Points */}
                <div className="absolute top-1/4 -left-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100 group-hover:translate-x-2 transition-transform duration-300">
                  <div className="text-xs text-gray-500">Traffic Growth</div>
                  <div className="text-lg font-bold text-green-500">+150%</div>
                </div>

                <div className="absolute bottom-1/4 -right-8 bg-white rounded-xl p-3 shadow-lg border border-gray-100 group-hover:-translate-x-2 transition-transform duration-300">
                  <div className="text-xs text-gray-500">Conversion Rate</div>
                  <div className="text-lg font-bold text-blue-500">12.5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;